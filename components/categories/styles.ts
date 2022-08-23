import styled from 'styled-components'

export const CategoryTable = styled.table`
    margin: ${(props) => props.theme.spacing[4]}px;
    font-family: 'Gotham Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: ${(props) => props.theme.font.sizes.s};
    text-align: left;
    border-collapse: collapse;
    line-height: 1.15;
    box-sizing: border-box;
`

export const CategoryHeader = styled.th`
    padding-bottom: 16px;
    font-size: ${(props) => props.theme.font.m};
    text-align: left;
`

export const CategoryCell = styled.td`
    text-align: left;
    padding-bottom: 16px;
    vertical-align: top;
`

export const SubcategoryTable = styled.table`
    margin: ${(props) => props.theme.spacing[2]}px
        ${(props) => props.theme.spacing[2]}px 0;
    font-family: 'Gotham Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: ${(props) => props.theme.font.sizes.xs};
    text-align: left;
    border-collapse: collapse;
    box-sizing: border-box;

    tbody {
        tr:last-of-type {
            td {
                padding-bottom: 0;
            }
        }
    }
`

export const SubcategoryHeader = styled.th`
    padding-bottom: 12px;
    text-align: left;
`

export const SubcategoryCell = styled.td`
    padding-bottom: 12px;
    text-align: left;
`
