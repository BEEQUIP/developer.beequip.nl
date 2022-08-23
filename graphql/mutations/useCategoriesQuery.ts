import { useQuery, gql } from '@apollo/client'
import { CategoriesQuery as Data } from '@/types/graphql/CategoriesQuery'

const QUERY = gql`
    query CategoriesQuery {
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

export const useCategoriesQuery = () => {
    return useQuery<Data>(QUERY)
}
