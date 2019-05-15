import { IAuth } from 'src/redux/auth'
import { IToast } from 'src/redux/toast'

export interface IStore {
  auth: IAuth
  toast: IToast
}
