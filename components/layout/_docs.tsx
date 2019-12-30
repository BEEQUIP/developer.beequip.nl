import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { Heading, theme } from '@beequip/hexagon'
import { Container } from './container'
import { Navbar } from './navbar'
import { markdownComponents } from '@beequip/dev-lib/mdx-components'

const Main = styled.main`
    min-height: 100vh;
    padding-top: 40px;
    padding-right: ${props => props.theme.spacing[2]}px;
    padding-bottom: 40px;
    padding-left: ${props => props.theme.spacing[2]}px;
`

const DocH2 = styled(Heading)`
    margin-top: ${props => props.theme.spacing[3]}px;

    h1 + & {
        margin-top: 0;
    }
`

const DocH3 = styled(Heading)`
    margin-top: ${props => props.theme.spacing[3]}px;

    h2 + & {
        margin-top: 0;
    }
`

const DocH4 = styled(Heading)`
    margin-top: ${props => props.theme.spacing[2]}px;
`

export const Docs = props => {
    return (
        <MDXProvider
            components={{
                ...markdownComponents,
                h2: props => <DocH2 {...props} size={2} />,
                h3: props => <DocH3 {...props} size={3} />,
                h4: props => <DocH4 {...props} size={4} />,
            }}
        >
            <Navbar />
            <Main>
                <Container maxWidth={1024}>{props.children}</Container>
            </Main>
        </MDXProvider>
    )
}
