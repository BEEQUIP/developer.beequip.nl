const markdownSlug = require('remark-slug')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [markdownSlug],
    },
})
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    webpack: (config, options) => {
        /**
         * The TsconfigPathsPlugin allows us to set the `paths` property
         * in tsconfig.json, which in turn gives us the ability to use tilde
         * imports in deeply nested folders. 
        E.g. importing from `components` instead of `../../../components`.
        */
        if (config.resolve.plugins) {
            config.resolve.plugins.push(new TsconfigPathsPlugin())
        } else {
            config.resolve.plugins = [new TsconfigPathsPlugin()]
        }

        return config
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
})
