import styled from 'styled-components'
import Link from 'next/link'
import { Calculator } from 'styled-icons/fa-solid/Calculator/Calculator'
import { NetworkWired } from 'styled-icons/fa-solid/NetworkWired/NetworkWired'
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

const ProductCard = styled(CardBase)`
    box-shadow: ${(props) => props.theme.shadow};
`

const MessageCard = styled(CardBase)`
    flex-direction: column;
    background-image: url('/images/hexagon-pattern.png');
    background-color: ${(props) => props.theme.colors.primary};
`

const CalculatorIcon = styled(Calculator)`
    margin-left: ${(props) => props.theme.spacing[1]}px;
    color: ${(props) => props.theme.colors.primary};
`

const ApiIcon = styled(NetworkWired)`
    margin-left: ${(props) => props.theme.spacing[1]}px;
    color: ${(props) => props.theme.colors.primary};
`

const ProductLink = styled.a`
    color: ${(props) => props.theme.colors.accent};
`

const MessageLink = styled.a`
    color: ${(props) => props.theme.colors.white};
`

const HugeBox = styled(Box)`
    margin-bottom: 100px;
`

export default function Home(): JSX.Element {
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
            <HugeBox bottom={5} top={3} right={2} left={2}>
                <Container>
                    <Heading size={2}>Getting started</Heading>
                    <Heading size={3}>What do you want to do?</Heading>
                    <TaskGrid>
                        <ProductCard>
                            <div>
                                <Heading size={4}>
                                    <Link
                                        href="/docs/widgets/calculator"
                                        passHref
                                    >
                                        <ProductLink>
                                            Embed our lease calculator
                                        </ProductLink>
                                    </Link>
                                </Heading>
                                <Text>
                                    Let your website’s visitors see our leasing
                                    prices for your equipment.
                                </Text>
                            </div>
                            <CalculatorIcon size={48} />
                        </ProductCard>
                        <ProductCard>
                            <div>
                                <Heading size={4}>
                                    <Link href="/docs/graphql-api" passHref>
                                        <ProductLink>Use our API</ProductLink>
                                    </Link>
                                </Heading>
                                <Text>
                                    Create your own custom lease calculator.
                                </Text>
                            </div>
                            <ApiIcon size={48} />
                        </ProductCard>
                        <MessageCard>
                            <Heading size={4}>Other integrations</Heading>
                            <Text>
                                If you want to integrate in any other way, give
                                us a call at{' '}
                                <MessageLink href="tel:0103400844">
                                    010 - 340 0844
                                </MessageLink>
                                .
                            </Text>
                        </MessageCard>
                    </TaskGrid>
                </Container>
            </HugeBox>
        </HomeLayout>
    )
}
