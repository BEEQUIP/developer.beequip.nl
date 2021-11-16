import { useMemo } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
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

const H1 = styled(Heading)`
    font-weight: 900;
`

const H2 = styled(Heading)`
    color: ${(props) => props.theme.colors.orange};
`

const ListItem = styled.li`
    line-height: 1.5;
`

const StyledTable = styled(Table)`
    margin-bottom: ${(props) => props.theme.spacing[4]}px;
`

const markdownComponents = {
    a: Anchor,
    h1: H1,
    h2: (props) => <H2 {...props} size={4} />,
    h3: (props) => <Heading {...props} size={5} margin={0} />,
    h4: (props) => <Heading {...props} size={6} />,
    h5: (props) => <Heading {...props} size={6} margin={0} />,
    h6: (props) => <Heading {...props} size={6} />,
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
