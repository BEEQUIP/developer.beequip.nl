import { useMemo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import slugify from 'slugify'
import innerText from 'react-innertext'
import Highlight, { defaultProps } from 'prism-react-renderer'
import {
    Heading,
    Text,
    Table,
    Head,
    Body,
    Row,
    Cell,
    Link as HexagonLink,
    theme,
} from '@beequip/hexagon'
import { Spacing } from '@beequip/hexagon/dist/theme/types'

const codeTheme = {
    plain: {
        display: 'block',
        backgroundColor: theme.colors.grey[5],
        padding: `${theme.spacing[2]}px`,
        borderRadius: theme.borderRadius.default,
        fontSize: theme.font.sizes.s,
    },
    styles: [
        {
            types: ['keyword'],
            style: {
                color: '#ff0078',
                fontWeight: 'bold',
            },
        },
        {
            types: ['comment'],
            style: {
                color: '#999',
                fontStyle: 'italic',
            },
        },
        {
            types: ['string', 'url', 'attr-value'],
            style: {
                color: '#028265',
            },
        },
        {
            types: ['variable', 'language-javascript'],
            style: {
                color: '#c6c5fe',
            },
        },
        {
            types: ['builtin', 'char', 'constant'],
            style: {
                color: '#000',
            },
        },
        {
            types: ['attr-name'],
            style: {
                color: '#d9931e',
                fontStyle: 'normal',
            },
        },
        {
            types: ['punctuation', 'operator'],
            style: {
                color: '#333',
            },
        },
        {
            types: ['number', 'function', 'tag'],
            style: {
                color: '#0076ff',
            },
        },
        {
            types: ['boolean', 'regex'],
            style: {
                color: '#d9931e',
            },
        },
    ],
}

const Code = ({ children, className, highlight, ...props }) => {
    const highlightedRanges = useMemo(() => {
        return highlight
            ? highlight.split(',').map((r) => {
                if (r.includes('-')) {
                    return r.split('-')
                }
                return +r
            })
            : []
    }, [highlight])

    if (!className) return <code {...props}>{children}</code>

    // https://mdxjs.com/guides/syntax-highlighting#all-together
    const language = className.replace(/language-/, '')

    return (
        <Highlight
            {...defaultProps}
            code={children.trim()}
            language={language}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            theme={codeTheme}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <code className={className} style={{ ...style }}>
                    {tokens.map((line, i) => (
                        <div
                            key={i}
                            {...getLineProps({ line, key: i })}
                            style={
                                highlightedRanges.some((r) =>
                                    Array.isArray(r)
                                        ? r[0] <= i + 1 && i + 1 <= r[1]
                                        : r === i + 1
                                )
                                    ? {
                                        background: '#cce0f5',
                                        margin: '0 -1rem',
                                        padding: '0 1rem',
                                    }
                                    : null
                            }
                        >
                            {line.map((token, key) => (
                                <span
                                    key={key}
                                    {...getTokenProps({ token, key })}
                                />
                            ))}
                        </div>
                    ))}
                </code>
            )}
        </Highlight>
    )
}

const StyledAnchor = styled(HexagonLink)`
    color: ${(props) => props.theme.colors.orange};
    text-decoration: underline;
`

const Anchor = ({ children, ...props }) => {
    return (
        <Link href={props.href}>
            <StyledAnchor hook={props.href} {...props}>
                {children}
            </StyledAnchor>
        </Link>
    )
}

const HR = styled.hr`
    margin: ${(props) => props.theme.spacing[2]}px 0;
    border-width: 1px;
    border-color: ${(props) => props.theme.colors.grey[5]};
    border-style: solid;
`

const TableHeadCell = styled.th`
    text-align: left;
`

const HeavyHeading = styled(Heading)`
    font-weight: 900;
`

const OrangeHeading = styled(Heading)`
    color: ${(props) => props.theme.colors.orange};
`

const H1 = ({ children, ...props }) => {
    const slug = slugify(innerText(children), {
        lower: true,
    })

    return (
        <HeavyHeading {...props} id={slug}>
            {children}
        </HeavyHeading>
    )
}

const H2 = ({ children, ...props }) => {
    const slug = slugify(innerText(children), {
        lower: true,
    })

    return (
        <OrangeHeading {...props} size={4} id={slug}>
            {children}
        </OrangeHeading>
    )
}

const HX = ({ children, size, margin = 2, ...props }) => {
    const slug = slugify(innerText(children), {
        lower: true,
    })

    return (
        <Heading size={size} id={slug} margin={margin as Spacing} {...props}>
            {children}
        </Heading>
    )
}

const ListItem = styled.li`
    line-height: 1.5;
`

const StyledTable = styled(Table)`
    margin-bottom: ${(props) => props.theme.spacing[4]}px;
`

const markdownComponents = {
    a: Anchor,
    h1: H1,
    h2: H2,
    h3: (props) => <HX margin={0} size={4} {...props} />,
    h4: (props) => <HX size={5} {...props} />,
    h5: (props) => <HX size={6} margin={0} {...props} />,
    h6: (props) => <HX size={6} {...props} />,
    p: (props) => <Text {...props} bottomMargin={2} />,
    code: Code,
    hr: HR,
    table: StyledTable,
    thead: Head,
    tbody: Body,
    tr: Row,
    th: TableHeadCell,
    td: Cell,
    inlineCode: Code,
    li: ListItem,
}

export function MdxTheme({ children }): JSX.Element {
    return <MDXProvider components={markdownComponents}>{children}</MDXProvider>
}
