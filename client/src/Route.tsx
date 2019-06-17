import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, theme } from 'src/styles'
import { client } from 'src/graphql/client'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import routes from './routes'

const Root: React.FC<{}> = () => (
  <ApolloHooksProvider client={client}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Router>{routes}</Router>
      </React.Fragment>
    </ThemeProvider>
  </ApolloHooksProvider>
)

export default Root
