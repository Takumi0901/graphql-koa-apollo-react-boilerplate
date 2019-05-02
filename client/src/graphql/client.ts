import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
// @ts-ignore
import { createNetworkStatusNotifier } from 'react-apollo-network-status'
import { InMemoryCache } from 'apollo-cache-inmemory'

const url = 'http://localhost:4000'

const httpLink = createHttpLink({
  uri: `${url}/graphql`
})

const { NetworkStatusNotifier, link: networkStatusNotifierLink } = createNetworkStatusNotifier()
export const NetworkStatusNotifierElement = NetworkStatusNotifier

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

export const client = new ApolloClient({
  link: ApolloLink.from([networkStatusNotifierLink.concat(authLink.concat(httpLink))]),
  cache: new InMemoryCache()
})
