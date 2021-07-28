import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Page } from '@/types/pages'

const Nav = styled.nav`
    padding: ${(props) => props.theme.spacing[3]}px 0;
    border-width: 0 1px 0 0;
    border-style: solid;
    border-color: ${(props) => props.theme.colors.grey[4]};
`

const StyledSection = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`

const StyledSectionTitle = styled.div<{ isActive: boolean; level: number }>`
    margin: 0 0 ${(props) => props.theme.spacing[1]}px 0;
    font-weight: ${(props) =>
        props.isActive && props.level === 0 ? 'bold' : 'normal'};
`

const StyledItem = styled.li<{ isActive: boolean; level: number }>`
    margin-bottom: ${(props) => props.theme.spacing[1]}px;
    padding-left: ${(props) => props.theme.spacing[2]}px;
    font-weight: ${(props) =>
        props.isActive && props.level === 0 ? 'bold' : 'normal'};
    font-size: ${(props) =>
        props.level > 1 ? props.theme.font.sizes.s : 'inherit'};
`

const StyledLink = styled.a<{ isActive: boolean }>`
    text-decoration: ${(props) => (props.isActive ? 'none' : 'underline')};
    color: ${(props) =>
        props.isActive
            ? props.theme.colors.orange
            : props.theme.colors.grey[2]};
`

function Item({ navigationTitle, route, isActive, level }): JSX.Element {
    return (
        <StyledItem isActive={isActive} level={level}>
            <Link href={route} passHref>
                <StyledLink isActive={isActive}>{navigationTitle}</StyledLink>
            </Link>
        </StyledItem>
    )
}

function Section({ navigationTitle, children, isActive, level }): JSX.Element {
    return (
        <StyledItem isActive={isActive} level={level}>
            <StyledSectionTitle isActive={isActive} level={level}>
                {navigationTitle}
            </StyledSectionTitle>
            {children}
        </StyledItem>
    )
}

function Tree({ data, level }: { data: Page[]; level: number }): JSX.Element {
    return (
        <StyledSection>
            {data.map((item, index) => {
                if (!item.children || item.children.length === 0) {
                    return (
                        <Item
                            isActive={item.isActive}
                            navigationTitle={item.navigationTitle}
                            route={item.route}
                            key={index}
                            level={level}
                        />
                    )
                }

                return (
                    <Section
                        isActive={item.isActive}
                        navigationTitle={item.navigationTitle}
                        key={index}
                        level={level}
                    >
                        <Tree data={item.children} level={level + 1} />
                    </Section>
                )
            })}
        </StyledSection>
    )
}

interface Props {
    directories: Page[]
}

export function SideNavigation({ directories }: Props): JSX.Element {
    if (!directories || directories.length === 0) {
        return null
    }

    return (
        <Nav>
            <Tree data={directories} level={0} />
        </Nav>
    )
}
