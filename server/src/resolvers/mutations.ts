// import { encode } from '../auth'
import { withLogout } from '../context'
import { Context } from '../types'
// import { createUser, getOAuthURLAndHash, federateAccount, loginStaff, createStaff } from '../api'
import { MutationResolvers } from '../gen/types'
// import uuidv4 from 'uuid/v4'
// import * as Cache from '../cache'

const Mutation: MutationResolvers = {
  async signin(_obj, _arg) {
    return { success: true, token: 'hgoehoge' }
  },
  async signout(_obj, _arg, context: Context) {
    return withLogout(context)(async _ => ({ success: true }))
  }
}

export default Mutation
