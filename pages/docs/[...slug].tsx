import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { CONTENT_PATH, contentFilePaths } from "@beequip/dev-lib/content-path"
import { DocsLayout } from '@beequip/dev-components/layout/_docs'
import { markdownComponents } from '@beequip/dev-lib/mdx-components'

const components = markdownComponents

export default function Doc({ source, frontMatter }) {
    const content = hydrate(source, { components })

    return (
        <DocsLayout meta={frontMatter}>
            <p>{frontMatter.hodor}</p>
            <div>{content}</div>
        </DocsLayout>
    )
}

export const getStaticProps = async ({ params }) => {
    const postFilePath = path.join(CONTENT_PATH, `${params.slug.join('/')}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await renderToString(content, {
        components,
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    }
}

export const getStaticPaths = async () => {
    const paths = contentFilePaths
        // Remove file extensions for page paths
        .map((path) => path.replace(/\.mdx?$/, '').split('/'))
        // Map the path into the static paths object required by Next.js
        .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}