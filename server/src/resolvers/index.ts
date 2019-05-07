import { IResolvers } from '../gen/types'
import Query from './queries'
import Mutation from './mutations'

const resolvers: IResolvers = {
  Query,
  Mutation
}

export default resolvers
