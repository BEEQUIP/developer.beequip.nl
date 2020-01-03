import { MDXProvider } from '@mdx-js/react'
import { Navbar } from './navbar'
import { markdownComponents } from '@beequip/dev-lib/mdx-components'
import { Head } from '@beequip/dev-components/layout/head'

export const Introduction = props => {
    const { meta } = props

    return (
        <MDXProvider components={{ ...markdownComponents }}>
            <Head
                title={meta.title}
                description={meta.description}
                titlePrefix=""
                titleSuffix=""
            />
            <Navbar />
            {props.children}
        </MDXProvider>
    )
}
