import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Route from './Route'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Route />, document.getElementById('root'))
serviceWorker.register();
