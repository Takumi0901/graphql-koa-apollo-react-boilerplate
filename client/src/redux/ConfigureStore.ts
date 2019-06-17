import * as Redux from 'redux'
import rootReducer from 'src/redux/RootReducer'
import { IStore } from 'src/redux/IStore'
// import { persistStore, persistReducer } from 'redux-persist'
// import toaster from './middleware/toaster'

const configureStore = (): Redux.Store<IStore> => {
  let composes

  const initState = { auth: { token: localStorage.getItem('token') || '' } }
  // if (process.env.NODE_ENV !== 'production') {
  //   const composeEnhancers =
  //     typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
  //       ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})
  //       : Redux.compose
  //   composes = composeEnhancers(Redux.applyMiddleware(toaster))
  // } else {
  //   composes = Redux.compose(Redux.applyMiddleware(toaster))
  // }

  composes = Redux.compose(Redux.applyMiddleware())
  return Redux.createStore(rootReducer, initState, composes)
}

export default configureStore
