import styled from 'styled-components'
import { Container } from './container'
import { Navbar } from './navbar'
import { Head } from './head'
import { MetaOptions, Page } from '@/types/pages'
import { SideNavigation } from './side-navigation'

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 60px 1fr;
    min-height: 100vh;
`

const Main = styled.main`
    display: grid;
    grid-template-columns: 300px 1fr;
    column-gap: ${(props) => props.theme.spacing[3]}px;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    padding: ${(props) => props.theme.spacing[2]}px;
`

interface Props {
    directories: Page[]
    meta: MetaOptions
    children: React.ReactNode
}

export function DocsLayout(props: Props): JSX.Element {
    const { meta, directories, children } = props

    return (
        <>
            <Head
                title={meta.title}
                description={meta.description}
                titlePrefix=""
                titleSuffix=" – Beequip Developer"
            />
            <Wrapper>
                <Navbar />
                <Main>
                    <SideNavigation directories={directories} />
                    <Content>
                        <Container>{children}</Container>
                    </Content>
                </Main>
            </Wrapper>
        </>
    )
}
