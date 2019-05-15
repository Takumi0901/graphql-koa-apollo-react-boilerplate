import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'
const actionCreator = actionCreatorFactory()

export const toggleAuth = actionCreator<{ token: string }>('auth/TOGGLE_AUTH')

export interface IAuth {
  token: string
}

const initialState: IAuth = {
  token: ''
}

export const tokenReducer = reducerWithInitialState(initialState).case(toggleAuth, (state, payload) => {
  localStorage.token = payload.token
  return { ...state, token: payload.token }
})
