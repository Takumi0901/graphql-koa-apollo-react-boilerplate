import * as React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import BaseStyle from 'src/styles/base'
import configureStore from 'src/redux/ConfigureStore'
import Header from './organisms/Header'
import SideMenu from './organisms/SideMenu'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { theme } from 'src/styles'
import { Wrapper, LogoffContent, Content } from './styles/app'
import Toast from 'src/components/atoms/Toast'
import { useSelector, useDispatch } from 'react-redux'
import { IStore } from 'src/redux/IStore'
import { toggleToast } from 'src/redux/toast'
import ErrorHandler from 'src/containers/app/organisms/ErrorHandler'

const store = configureStore()

const MainContent: React.FunctionComponent<{}> = props => {
  const token = useSelector((state: IStore) => state.auth.token)
  const { isShow, text } = useSelector((state: IStore) => state.toast)
  const dispatch = useDispatch()
  const onToggleToast = React.useCallback(() => {
    return dispatch(toggleToast({ text: '', isShow: false }))
  }, [])
  return (
    <React.Fragment>
      {token.length < 1 ? <LogoffContent>{props.children}</LogoffContent> : <Content>{props.children}</Content>}
      <Toast
        isShow={isShow}
        setToast={() => onToggleToast()}
        text={text}
        color={'#e34959'}
        offsetX={40}
        offsetY={60}
        zIndex={2000}
        vertical={'bottom'}
        align={'right'}
      />
    </React.Fragment>
  )
}

class App extends React.PureComponent<RouteComponentProps<{}>, {}> {
  public render() {
    return (
      <ReduxProvider store={store}>
        <Wrapper>
          <BaseStyle theme={theme} />
          <Header />
          <SideMenu />
          <MainContent>{this.props.children}</MainContent>
          <ErrorHandler />
        </Wrapper>
      </ReduxProvider>
    )
  }
}

export default withRouter<RouteComponentProps<{}>>(App)
