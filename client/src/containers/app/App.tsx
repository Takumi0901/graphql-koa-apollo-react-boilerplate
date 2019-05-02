import * as React from 'react'
import BaseStyle from 'src/styles/base'
import Header from './organisms/Header'
import SideMenu from './organisms/SideMenu'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { theme } from 'src/styles'
import { Provider, Container, Subscribe } from 'unstated'
import { Wrapper, LogoffContent, Content } from './styles/app'

export type ContainerState = {
  token: string
}

export class AppContainer extends Container<ContainerState> {
  state = {
    token: localStorage.getItem('token') || ''
  }

  login(token: string) {
    this.setState({ token: token })
  }

  logout() {
    localStorage.token = ''
    this.setState({ token: '' })
  }
}

class App extends React.PureComponent<RouteComponentProps<{}>, {}> {
  public render() {
    return (
      <Provider>
        <Wrapper>
          <BaseStyle theme={theme} />
          <Header />
          <SideMenu />
          <Subscribe to={[AppContainer]}>
            {(app: AppContainer) => {
              if (app.state.token.length < 1) return <LogoffContent>{this.props.children}</LogoffContent>
              if (app.state.token.length > 0) return <Content>{this.props.children}</Content>
            }}
          </Subscribe>
        </Wrapper>
      </Provider>
    )
  }
}

export default withRouter<RouteComponentProps<{}>>(App)
