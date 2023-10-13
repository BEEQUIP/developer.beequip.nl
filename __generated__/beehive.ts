import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never
      }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string }
    String: { input: string; output: string }
    Boolean: { input: boolean; output: boolean }
    Int: { input: number; output: number }
    Float: { input: number; output: number }
    DateTime: { input: any; output: any }
    Date: { input: any; output: any }
    Currency: { input: any; output: any }
    Upload: { input: any; output: any }
}

/** Properties for signing up as an intermediary */
export type PublicCreateIntermediaryInput = {
    cocNumber?: InputMaybe<Scalars['String']['input']>
    name: Scalars['String']['input']
}

export type CategoriesQueryVariables = Exact<{ [key: string]: never }>

export type CategoriesQuery = {
    __typename?: 'Query'
    categoryGroups: Array<{
        __typename?: 'CategoryGroup'
        id: string
        name: string
        categories: Array<{ __typename?: 'Category'; id: string; name: string }>
    }>
}

export type CreateIntermediaryMutationVariables = Exact<{
    input?: InputMaybe<PublicCreateIntermediaryInput>
}>

export type CreateIntermediaryMutation = {
    __typename?: 'Mutation'
    publicCreateIntermediary?: {
        __typename?: 'PublicCreateIntermediaryPayload'
        intermediary?: {
            __typename?: 'PublicIntermediary'
            cocNumber?: string | null
            createdAt: any
            id: string
            name: string
            token?: string | null
            updatedAt: any
        } | null
    } | null
}

export const CategoriesDocument = gql`
    query Categories {
        categoryGroups {
            id
            name
            categories {
                id
                name
            }
        }
    }
`

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(
    baseOptions?: Apollo.QueryHookOptions<
        CategoriesQuery,
        CategoriesQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(
        CategoriesDocument,
        options
    )
}
export function useCategoriesLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        CategoriesQuery,
        CategoriesQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
        CategoriesDocument,
        options
    )
}
export function useCategoriesSuspenseQuery(
    baseOptions?: Apollo.SuspenseQueryHookOptions<
        CategoriesQuery,
        CategoriesQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(
        CategoriesDocument,
        options
    )
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>
export type CategoriesLazyQueryHookResult = ReturnType<
    typeof useCategoriesLazyQuery
>
export type CategoriesSuspenseQueryHookResult = ReturnType<
    typeof useCategoriesSuspenseQuery
>
export type CategoriesQueryResult = Apollo.QueryResult<
    CategoriesQuery,
    CategoriesQueryVariables
>
export const CreateIntermediaryDocument = gql`
    mutation CreateIntermediary($input: PublicCreateIntermediaryInput) {
        publicCreateIntermediary(input: $input) {
            intermediary {
                cocNumber
                createdAt
                id
                name
                token
                updatedAt
            }
        }
    }
`
export type CreateIntermediaryMutationFn = Apollo.MutationFunction<
    CreateIntermediaryMutation,
    CreateIntermediaryMutationVariables
>

/**
 * __useCreateIntermediaryMutation__
 *
 * To run a mutation, you first call `useCreateIntermediaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIntermediaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIntermediaryMutation, { data, loading, error }] = useCreateIntermediaryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIntermediaryMutation(
    baseOptions?: Apollo.MutationHookOptions<
        CreateIntermediaryMutation,
        CreateIntermediaryMutationVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions }
    return Apollo.useMutation<
        CreateIntermediaryMutation,
        CreateIntermediaryMutationVariables
    >(CreateIntermediaryDocument, options)
}
export type CreateIntermediaryMutationHookResult = ReturnType<
    typeof useCreateIntermediaryMutation
>
export type CreateIntermediaryMutationResult =
    Apollo.MutationResult<CreateIntermediaryMutation>
export type CreateIntermediaryMutationOptions = Apollo.BaseMutationOptions<
    CreateIntermediaryMutation,
    CreateIntermediaryMutationVariables
>
