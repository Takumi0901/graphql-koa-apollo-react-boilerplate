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

import { GraphQLResolveInfo } from 'graphql'

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {}
  User: User
  ID: Scalars['ID']
  String: Scalars['String']
  Mutation: {}
  AuthResponse: AuthResponse
  Boolean: Scalars['Boolean']
  Response: Response
}

export type AuthResponseResolvers<ContextType = any, ParentType = ResolversTypes['AuthResponse']> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}

export type MutationResolvers<ContextType = any, ParentType = ResolversTypes['Mutation']> = {
  signin?: Resolver<ResolversTypes['AuthResponse'], ParentType, ContextType, MutationSigninArgs>
  signout?: Resolver<ResolversTypes['Response'], ParentType, ContextType>
}

export type QueryResolvers<ContextType = any, ParentType = ResolversTypes['Query']> = {
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>
}

export type ResponseResolvers<ContextType = any, ParentType = ResolversTypes['Response']> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
}

export type UserResolvers<ContextType = any, ParentType = ResolversTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  AuthResponse?: AuthResponseResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Response?: ResponseResolvers<ContextType>
  User?: UserResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>
