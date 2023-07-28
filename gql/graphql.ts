/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Item = {
  __typename?: 'Item';
  broughtBy: Scalars['String']['output'];
  cost: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** The mutation root type. */
export type Mutation = {
  __typename?: 'Mutation';
  createItem: Item;
  deleteItem: Item;
};


/** The mutation root type. */
export type MutationCreateItemArgs = {
  broughtBy: Scalars['String']['input'];
  cost: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


/** The mutation root type. */
export type MutationDeleteItemArgs = {
  id: Scalars['String']['input'];
};

/** The query root type. */
export type Query = {
  __typename?: 'Query';
  items: Array<Item>;
};
