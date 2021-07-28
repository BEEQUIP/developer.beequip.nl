import styled from 'styled-components'
import Link from 'next/link'
import { Calculator } from 'styled-icons/fa-solid/Calculator/Calculator'
import { Box, Heading, Text, media } from '@beequip/hexagon'
import { Container } from '@/components/container'
import { Jumbotron } from '@/components/jumbotron'
import { HomeLayout } from '@/components/home-layout'

const TaskGrid = styled.div`
    display: grid;
    grid-gap: ${(props) => props.theme.spacing[3]}px;
    grid-template-columns: repeat(1, 1fr);

    ${media.s`
        grid-template-columns: repeat(3, 1fr);
    `};
`

const CardBase = styled.article`
    display: flex;
    padding: ${(props) => props.theme.spacing[2]}px;
    border-radius: ${(props) => props.theme.borderRadius.default}px;
`

const WidgetCard = styled(CardBase)`
    box-shadow: ${(props) => props.theme.shadow};
`

const MessageCard = styled(CardBase)`
    flex-direction: column;
    background-image: url('/images/hexagon-pattern.png');
    background-color: ${(props) => props.theme.colors.primary};
`

const Icon = styled(Calculator)`
    margin-left: ${(props) => props.theme.spacing[1]}px;
    color: ${(props) => props.theme.colors.primary};
`

const StyledLink = styled.a`
    color: ${(props) => props.theme.colors.accent};
`

export default function Home() {
    return (
        <HomeLayout
            meta={{
                title: 'Beequip for Developers – Documentation',
                description:
                    'Developer resources for Beequip equipment leasing',
            }}
        >
            <Jumbotron>
                <Heading size={1}>
                    Developer resources for Beequip equipment leasing
                </Heading>
                <Heading size={3} weight="normal">
                    Explore how to integrate your software with ours.
                </Heading>
            </Jumbotron>
            <Box top={3} right={2} left={2}>
                <Container>
                    <Heading size={2}>Getting started</Heading>
                    <Heading size={3}>What do you want to do?</Heading>
                    <TaskGrid>
                        <WidgetCard>
                            <div>
                                <Heading size={4}>
                                    <Link href="/widgets/calculator" passHref>
                                        <StyledLink>
                                            Embed our lease calculator
                                        </StyledLink>
                                    </Link>
                                </Heading>
                                <Text>
                                    Let your website’s visitors see our leasing
                                    prices for your equipment.
                                </Text>
                            </div>
                            <Icon size={48} />
                        </WidgetCard>
                        <MessageCard>
                            <Heading size={4}>Other integrations</Heading>
                            <Text>
                                We’re currently working on extending this portal
                                and building more ways to connect to Beequip.
                            </Text>
                        </MessageCard>
                    </TaskGrid>
                </Container>
            </Box>
        </HomeLayout>
    )
}
