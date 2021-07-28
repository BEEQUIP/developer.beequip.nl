import { MDXProvider } from '@mdx-js/react'
import { Navbar } from './navbar'
import { markdownComponents } from '@/lib/mdx-components'
import { Head } from '@/components/head'

export function HomeLayout(props): JSX.Element {
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
