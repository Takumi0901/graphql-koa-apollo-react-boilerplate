import { ApolloServer } from 'apollo-server-koa'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import Koa from 'koa'
import cors from '@koa/cors'
import mocks from './mocks'
import resolvers from './resolvers'

const typeDefs = importSchema('schema.graphql')

const server = new ApolloServer({
  schema: makeExecutableSchema({
    resolvers,
    typeDefs
  }),
  mocks: process.env.NODE_ENV === 'mock' ? mocks : false
})

const app = new Koa()
app.use(
  cors({
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTION'
  })
)
server.applyMiddleware({ app })

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
