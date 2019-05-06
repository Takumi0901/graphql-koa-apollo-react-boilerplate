import gql from 'graphql-tag'
import * as ReactApolloHooks from 'react-apollo-hooks'

export const UsersDocument = gql`
  query users {
    users {
      id
      name
    }
  }
`

export function useUsersQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<UsersQueryVariables>) {
  return ReactApolloHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions)
}
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  users?: Maybe<Array<Maybe<User>>>
}

export type User = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}
export type UsersQueryVariables = {}

export type UsersQuery = { __typename?: 'Query' } & {
  users: Maybe<Array<Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>>>
}
