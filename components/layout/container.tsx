import styled from 'styled-components'

interface Props {
    maxWidth?: number
}

export const Container = styled.div<Props>`
    max-width: ${props => props.maxWidth ? `${props.maxWidth}px` : '1280px'};
    width: 100%;
    margin-right: auto;
    margin-left: auto;
`

Container.displayName = 'Container'
