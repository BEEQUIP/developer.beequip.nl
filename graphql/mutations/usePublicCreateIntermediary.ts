import { useMutation } from '@apollo/react-hooks'
import {
    PublicCreateIntermediary as Data,
    PublicCreateIntermediaryVariables as Variables,
} from '@beequip/dev-types/graphql/PublicCreateIntermediary'
import gql from 'graphql-tag'

const mutation = gql`
    mutation PublicCreateIntermediary(
        $input: PublicCreateIntermediaryInputType
    ) {
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

export const usePublicCreateIntermediary = () => {
    return useMutation<Data, Variables>(mutation)
}
