import * as React from 'react'
import { ApolloError } from 'apollo-client'
import { NetworkStatusNotifierElement } from 'src/graphql/client'
import Toast from 'src/components/atoms/Toast'

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
  const [isShowToast, setToast] = React.useState(false)
  return (
    <NetworkStatusNotifierElement
      render={({ loading, error }: { loading: boolean; error: ApolloError }) => {
        setToast(Boolean(error))
        if (isShowToast) setTimeout(() => setToast(false), 2000)
        const errorText = error ? handler(error.graphQLErrors[0].extensions.code) : ''
        return (
          <div>
            {loading && null}
            {error && (
              <Toast
                isShow={isShowToast}
                setToast={setToast}
                text={errorText}
                color={'#e34959'}
                offsetX={40}
                offsetY={60}
                zIndex={2000}
                vertical={'bottom'}
                align={'right'}
              />
            )}
          </div>
        )
      }}
    />
  )
}

export default ErrorHandler
