import { useCategoriesQuery } from '@/graphql/mutations/useCategoriesQuery'
import { CategoryTable as Table, CategoryHeader, CategoryCell } from './styles'
import { SubcategoryTable } from './SubcategoryTable'

export const CategoryTable = () => {
    const { loading, data } = useCategoriesQuery()
    const categories = data?.categoryGroups

    if (loading) return <div>Is loading</div>

    return (
        <Table>
            <thead>
                <tr>
                    <CategoryHeader style={{ width: '48px' }}>
                        Id
                    </CategoryHeader>
                    <CategoryHeader>Category</CategoryHeader>
                </tr>
            </thead>
            <tbody>
                {categories?.map((category) => {
                    const subcategories = category.categories

                    return (
                        <tr key={category.id}>
                            <CategoryCell>{category.id}</CategoryCell>
                            <CategoryCell>
                                <details>
                                    <summary>{category.name}</summary>
                                    <SubcategoryTable
                                        subcategories={subcategories}
                                    />
                                </details>
                            </CategoryCell>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
