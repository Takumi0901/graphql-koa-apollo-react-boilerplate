import { QueryResolvers } from '../gen/types'
import { authorized } from '../context'

const Query: QueryResolvers = {
  users: (_obj, _args, context) =>
    authorized(context)(async _ => {
      return [{ id: '1', name: `foo` }]
    })
}

export default Query
