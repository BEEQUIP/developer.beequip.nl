import styled from 'styled-components'
import { Subscribe } from '@/components/newsletter'

const Wrapper = styled.footer<{ layoutType: PageLayoutType }>`
    display: flex;
    justify-content: ${(props) =>
        props.layoutType === 'home' ? 'center' : 'flex-start'};
    padding: ${(props) => (props.layoutType === 'home' ? 100 : 24)}px;
    border-width: 1px 0 0 0;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.grey[4]};
`

type PageLayoutType = 'home' | 'docs'

interface Props {
    /**
     * Indicates the type of page layout the footer is rendered for.
     * The contents and layout of the footer changes depending on
     * the type of page.
     */
    renderFor: PageLayoutType
}

export function Footer({ renderFor }: Props): JSX.Element {
    return (
        <Wrapper layoutType={renderFor}>
            <Subscribe />
        </Wrapper>
    )
}
