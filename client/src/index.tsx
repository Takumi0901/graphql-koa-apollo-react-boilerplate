import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Route from './Route'
// import * as LogRocket from 'logrocket'

// @ts-ignore
// import setupLogRocketReact from 'logrocket-react'
// LogRocket.init('rt6kqo/ninary-officelocal', {
//   shouldCaptureIP: false
// })
// setupLogRocketReact(LogRocket)

ReactDOM.render(<Route />, document.getElementById('root'))
