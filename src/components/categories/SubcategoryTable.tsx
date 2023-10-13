import {
    SubcategoryCell,
    SubcategoryTable as Table,
    SubcategoryHeader,
} from './styles'

export const SubcategoryTable = ({ subcategories }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <SubcategoryHeader style={{ width: '36px' }}>
                        Id
                    </SubcategoryHeader>
                    <SubcategoryHeader>Subcategory</SubcategoryHeader>
                </tr>
            </thead>
            <tbody>
                {subcategories.map((subcategory) => (
                    <tr key={subcategory.id}>
                        <SubcategoryCell>{subcategory.id}</SubcategoryCell>
                        <SubcategoryCell>{subcategory.name}</SubcategoryCell>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
