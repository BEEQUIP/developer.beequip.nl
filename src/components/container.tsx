import styled from 'styled-components'

interface Props {
    maxWidth?: number
    withSpacing?: boolean
}

export const Container = styled.div<Props>`
    max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : '90rem')};
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: ${(props) => (props.withSpacing ? '100px' : '0')};
    padding-right: max(env(safe-area-inset-right), 1.5rem);
    padding-left: max(env(safe-area-inset-left), 1.5rem);
`

Container.displayName = 'Container'
