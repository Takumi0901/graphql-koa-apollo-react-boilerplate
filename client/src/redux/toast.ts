import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'
const actionCreator = actionCreatorFactory()

export const toggleToast = actionCreator<{ text: string; isShow: boolean }>('toast/TOGGLE_TOAST')

export interface IToast {
  text: string
  isShow: boolean
}

const initialState: IToast = {
  text: '',
  isShow: false
}

export const toastReducer = reducerWithInitialState(initialState).case(toggleToast, (state, payload) => {
  return { ...state, text: payload.text, isShow: payload.isShow }
})
