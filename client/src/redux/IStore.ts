import { IAuth } from 'src/redux/modules/auth'
import { IToast } from 'src/redux/modules/toast'

export interface IStore {
  auth: IAuth
  toast: IToast
}
