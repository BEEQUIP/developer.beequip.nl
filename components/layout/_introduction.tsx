import { MDXProvider } from '@mdx-js/react'
import { Navbar } from './navbar'
import { markdownComponents } from '@beequip/dev-lib/mdx-components'

export const Introduction = props => {
    return (
        <MDXProvider components={{ ...markdownComponents }}>
            <Navbar />
            {props.children}
        </MDXProvider>
    )
}
