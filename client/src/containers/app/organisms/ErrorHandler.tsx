import * as React from 'react'
import { ApolloError } from 'apollo-client'
import { NetworkStatusNotifierElement } from 'src/graphql/client'
import { useDispatch } from 'react-redux'
import { toggleToast } from 'src/redux/modules/toast'

export const handler = (code: string): string => {
  switch (code) {
    case 'UNAUTHENTICATED':
      // setTimeout(() => location.replace(`/login?prev=${location.pathname}`), 500);
      return 'ログインしてください'
    case 'INTERNAL_SERVER_ERROR':
      // setTimeout(() => location.replace(`/is-error`), 500);
      return '時間を置いて再度お試しください'
    default:
      // setTimeout(() => location.replace(`/is-error`), 500);
      return 'エラーが発生しました'
  }
}

const ErrorHandler: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch()
  const onToggleToast = React.useCallback(props => {
    return dispatch(toggleToast(props))
  }, [])
  return (
    <NetworkStatusNotifierElement
      render={({ loading, error }: { loading: boolean; error: ApolloError }) => {
        const errorText = error ? handler(error.graphQLErrors[0].extensions.code) : ''
        if (error) onToggleToast({ text: errorText, isShow: true })
        return <div>{loading && null}</div>
      }}
    />
  )
}

export default ErrorHandler
