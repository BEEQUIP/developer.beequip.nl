import styled from 'styled-components'
import Link from 'next/link'
import { FullLogo } from '@/components/logos/full'

const Nav = styled.nav`
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: ${(props) => props.theme.spacing[2]}px;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
`

const LogoContainer = styled.span`
    display: inline-flex;
    align-items: center;
`

const Beequip = styled.span`
    margin-right: 4px;
    margin-left: ${(props) => props.theme.spacing[1]}px;
    font-weight: bold;
`

const Suffix = styled.span`
    color: ${(props) => props.theme.colors.orange};
`

const StyledLink = styled.a`
    color: ${(props) => props.theme.colors.white};
    text-decoration: none;
`

export function Navbar(): JSX.Element {
    return (
        <Nav>
            <Link href="/" passHref>
                <StyledLink>
                    <LogoContainer>
                        <FullLogo width={24} height={33} />
                        <Beequip>BEEQUIP</Beequip> <Suffix>Developer</Suffix>
                    </LogoContainer>
                </StyledLink>
            </Link>
        </Nav>
    )
}
