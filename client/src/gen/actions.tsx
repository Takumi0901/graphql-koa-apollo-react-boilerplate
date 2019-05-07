import gql from 'graphql-tag'
import * as ReactApolloHooks from 'react-apollo-hooks'

export const SigninDocument = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      success
    }
  }
`

export function useSigninMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<SigninMutation, SigninMutationVariables>
) {
  return ReactApolloHooks.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, baseOptions)
}
export const SignoutDocument = gql`
  mutation signout {
    signout {
      success
    }
  }
`

export function useSignoutMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<SignoutMutation, SignoutMutationVariables>
) {
  return ReactApolloHooks.useMutation<SignoutMutation, SignoutMutationVariables>(SignoutDocument, baseOptions)
}
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

export type AuthResponse = {
  success?: Maybe<Scalars['Boolean']>
  token?: Maybe<Scalars['String']>
}

export type Mutation = {
  signin: AuthResponse
  signout: Response
}

export type MutationSigninArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Query = {
  users?: Maybe<Array<Maybe<User>>>
}

export type Response = {
  success?: Maybe<Scalars['Boolean']>
}

export type User = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
}
export type SigninMutationVariables = {
  email: Scalars['String']
  password: Scalars['String']
}

export type SigninMutation = { __typename?: 'Mutation' } & {
  signin: { __typename?: 'AuthResponse' } & Pick<AuthResponse, 'token' | 'success'>
}

export type SignoutMutationVariables = {}

export type SignoutMutation = { __typename?: 'Mutation' } & {
  signout: { __typename?: 'Response' } & Pick<Response, 'success'>
}

export type UsersQueryVariables = {}

export type UsersQuery = { __typename?: 'Query' } & {
  users: Maybe<Array<Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>>>
}
