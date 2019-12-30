import styled from 'styled-components'
import { Heading, Text } from '@beequip/hexagon'

const Pre = styled.pre`
    margin-bottom: ${props => props.theme.spacing[2]}px;
    padding: ${props => props.theme.spacing[1]}px
        ${props => props.theme.spacing[2]}px;
    background-color: ${props => props.theme.colors.grey[5]};
    color: ${props => props.theme.colors.accent};
    font-size: ${props => props.theme.font.sizes.m};
`

const HR = styled.hr`
    margin: ${props => props.theme.spacing[2]}px 0;
    border-width: 1px;
    border-color: ${props => props.theme.colors.grey[5]};
    border-style: solid;
`

export const markdownComponents = {
    h1: props => <Heading {...props} size={1} />,
    h2: props => <Heading {...props} size={2} />,
    h3: props => <Heading {...props} size={3} />,
    h4: props => <Heading {...props} size={4} />,
    h5: props => <Heading {...props} size={5} margin={0} />,
    h6: props => <Heading {...props} size={6} />,
    p: props => <Text {...props} bottomMargin={2} />,
    pre: Pre,
    hr: HR,
}
