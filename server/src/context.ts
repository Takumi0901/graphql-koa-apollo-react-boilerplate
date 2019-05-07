import { Request } from 'koa'
import { decode } from './auth'
import { Auth, Context } from './types'
import { AuthenticationError } from 'apollo-server-koa'
import * as Cache from './cache'

const authHeaderRegex = /^Bearer (.+)/

export default function(arg: { ctx: { request: Request } }): Context {
  const authHeader: string = arg.ctx.request.headers.authorization || ''
  if (!authHeaderRegex.test(authHeader)) {
    return null
  }
  const token = authHeader.replace(authHeaderRegex, '$1')
  // const _token = Cache.get(token)
  // return _token ? { auth: decode(_token) } : null
  return { auth: decode(token) }
}

export const authorized = (ctx: Context) => (fn: (auth: Auth) => any) => {
  if (!ctx.auth) {
    throw new AuthenticationError('you must be logged in')
  }
  return fn(ctx.auth)
}

export const withLogout = (ctx: Context) => (fn: (auth: Auth) => any) => {
  if (!ctx.auth) {
    throw new AuthenticationError('you must be logged in')
  }
  Cache.del(ctx.auth.token)
  return fn(ctx.auth)
}
