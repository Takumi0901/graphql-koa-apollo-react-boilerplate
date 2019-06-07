import * as React from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import App from 'src/containers/app/App'

const Users = React.lazy(() => import(/* webpackChunkName: "Users" */ './containers/users'))
const Login = React.lazy(() => import(/* webpackChunkName: "Login" */ './containers/login'))
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './containers/app/NotFound'))
const CatchError = React.lazy(() => import(/* webpackChunkName: "CatchError" */ './containers/app/CatchError'))

export default (
  <App>
    <React.Suspense fallback={<></>}>
      <Switch>
        <Route exact path="/login" component={withRouter(Login)} />
        <Route exact path="/" component={() => <Users />} />
        <Route path="/is-error" component={withRouter(CatchError)} />
        <Route path="*" component={withRouter(NotFound)} />
      </Switch>
    </React.Suspense>
  </App>
)
