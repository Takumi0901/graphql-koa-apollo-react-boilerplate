import * as Redux from 'redux'
import { IStore } from 'src/redux/IStore'
import { tokenReducer } from 'src/redux/modules/auth'
import { toastReducer } from 'src/redux/modules/toast'

const rootReducer: Redux.Reducer<IStore> = Redux.combineReducers<IStore>({
  auth: tokenReducer,
  toast: toastReducer
})

export default rootReducer
