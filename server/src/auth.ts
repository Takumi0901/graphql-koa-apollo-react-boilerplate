// import jwt from 'jsonwebtoken'
import { Auth } from './types'

export function decode(token: string): Auth {
  // const decoded = jwt.decode(token)
  const decoded = token
  if (!decoded) {
    return null
  }
  const auth: Auth = {
    token: token
  }
  return auth
}
// export function encode(body: any): string {
//   return jwt.sign(body, 'seq', {
//     expiresIn: '24h'
//   })
// }

// export function verify(token: string) {
//   return jwt.verify(token, 'seq')
// }
