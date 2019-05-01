import { QueryResolvers } from '../gen/types'

const Query: QueryResolvers = {
  users: (_obj, _args, _context, _info) => [{ id: '1', name: `foo` }]
}

export default Query
