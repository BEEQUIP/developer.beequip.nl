import styled, { keyframes } from 'styled-components'
import { media } from '@beequip/hexagon'
import { Container } from './container'

const animation = keyframes`
    0% { background-color: #ffa100; }
    12% { background-color: #ffc400; }
    24% { background-color: #fee8bf; }
    36% { background-color: #a8acb8; }
    48% { background-color: #cacedb; }
    60% { background-color: #787d8b; }
    72% { background-color: #056fff; }
    84% { background-color: #207dff; }
    100% { background-color: #2a1bff; }
`

const PatternContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem ${props => props.theme.spacing[2]}px;
    background-image: url('/images/hexagon-pattern.png');
    animation: 45s ${animation} infinite alternate;

    ${media.s`
        padding-top: 8rem;
        padding-bottom: 8rem;
    `};
`


export function Jumbotron(props): JSX.Element {
    return (
        <PatternContainer>
            <Container>{props.children}</Container>
        </PatternContainer>
    )
}
