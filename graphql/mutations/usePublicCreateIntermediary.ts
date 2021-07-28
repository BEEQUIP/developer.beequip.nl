import { useMutation } from '@apollo/react-hooks'
import {
    PublicCreateIntermediary as Data,
    PublicCreateIntermediaryVariables as Variables,
} from '@/types/graphql/PublicCreateIntermediary'
import gql from 'graphql-tag'

const mutation = gql`
    mutation PublicCreateIntermediary($input: PublicCreateIntermediaryInput) {
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

export function usePublicCreateIntermediary() {
    return useMutation<Data, Variables>(mutation)
}
