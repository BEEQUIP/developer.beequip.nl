const withNextra = require('nextra')('./nextra/nextra-theme.tsx')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = withNextra({
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
        localeDetection: false,
    },
    webpack: (config) => {
        /**
         * The TsconfigPathsPlugin allows us to set the `paths` property
         * in tsconfig.json, which in turn gives us the ability to use tilde
         * imports in deeply nested folders.
         * E.g. importing from `components` instead of `../../../components`.
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
    async redirects() {
        return [
            {
                source: '/widgets/calculator',
                destination: '/docs/widgets/variants/calculator',
                permanent: true,
            },
            {
                source: '/docs/widgets/calculator',
                destination: '/docs/widgets/variants/calculator',
                permanent: true,
            },
        ]
    },
})
