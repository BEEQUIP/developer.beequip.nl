import { ApolloError } from '@apollo/client'

export const getGraphQLError = (key: string, error?: ApolloError) => {
    if (error === undefined) {
        return undefined
    }

    const normalizedErrors = error.graphQLErrors.reduce((normalized, error) => {
        const parsedError = Object.entries(JSON.parse(error.message))
        normalized[parsedError[0][0]] = parsedError[0][1][0]

        return normalized
    }, {} as any)

    return normalizedErrors[key]
}
