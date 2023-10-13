import styled from 'styled-components'
import { Calculator } from '@styled-icons/boxicons-solid/Calculator'
import { NetworkChart } from '@styled-icons/boxicons-solid/NetworkChart'
import { Box, media } from '@beequip/hexagon'

export const TaskGrid = styled.div`
    display: grid;
    grid-gap: ${(props) => props.theme.spacing[3]}px;
    grid-template-columns: repeat(1, 1fr);

    ${media.s`
        grid-template-columns: repeat(3, 1fr);
    `};
`

export const CardBase = styled.article`
    display: flex;
    padding: ${(props) => props.theme.spacing[2]}px;
    border-radius: ${(props) => props.theme.borderRadius.default}px;
`

export const ProductCard = styled(CardBase)`
    box-shadow: ${(props) => props.theme.shadow.small};
`

export const MessageCard = styled(CardBase)`
    flex-direction: column;
    background-image: url('/images/hexagon-pattern.png');
    background-color: ${(props) => props.theme.colors.primary};
`

export const CalculatorIcon = styled(Calculator)`
    margin-left: ${(props) => props.theme.spacing[1]}px;
    color: ${(props) => props.theme.colors.primary};
`

export const ApiIcon = styled(NetworkChart)`
    margin-left: ${(props) => props.theme.spacing[1]}px;
    color: ${(props) => props.theme.colors.primary};
`

export const ProductLink = styled.a`
    color: ${(props) => props.theme.colors.accent};
`

export const MessageLink = styled.a`
    color: ${(props) => props.theme.colors.white};
`

export const HugeBox = styled(Box)`
    margin-bottom: 100px;
`
