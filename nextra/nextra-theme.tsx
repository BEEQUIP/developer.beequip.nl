import React from 'react'
import { MdxTheme } from '@/components/mdx-theme'
import { DocsLayout } from '@/components/docs-layout'
import { usePages } from '@/hooks/usePages'
import { MetaOptions, Page } from '@/types/pages'

interface NextraOptions {
    filename: string
    route: string
    meta: MetaOptions
    pageMap: Page[]
}

function Layout(props) {
    const { meta, children } = props
    const { directories } = usePages()

    return (
        <DocsLayout meta={meta} directories={directories}>
            <MdxTheme>{children}</MdxTheme>
        </DocsLayout>
    )
}

const Theme =
    (opts: NextraOptions) =>
    (props: { children: React.ReactNode }): JSX.Element => {
        return <Layout {...opts} {...props} />
    }

export default Theme
