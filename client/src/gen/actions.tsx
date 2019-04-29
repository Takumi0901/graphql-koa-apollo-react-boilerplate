
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AuthResponse = {
  success?: Maybe<Scalars['Boolean']>,
  token?: Maybe<Scalars['String']>,
};

export type Mutation = {
  login: AuthResponse,
};


export type MutationLoginArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};

export type Query = {
  users?: Maybe<Array<Maybe<User>>>,
};

export type User = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};
export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = ({ __typename?: 'Mutation' } & { login: ({ __typename?: 'AuthResponse' } & Pick<AuthResponse, 'token' | 'success'>) });

export type UsersQueryVariables = {};


export type UsersQuery = ({ __typename?: 'Query' } & { users: Maybe<Array<Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'name'>)>>> });

import gql from 'graphql-tag';
import * as ReactApolloHooks from 'react-apollo-hooks';

export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    success
  }
}
    `;

export function useLoginMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  return ReactApolloHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
};
export const UsersDocument = gql`
    query users {
  users {
    id
    name
  }
}
    `;

export function useUsersQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<UsersQueryVariables>) {
  return ReactApolloHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
};