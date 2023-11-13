const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
    compiler: {
        styledComponents: true,
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
            {
                source: '/docs/widgets/calculator',
                destination: '/leasing/widgets/calculator',
                permanent: true,
            },
            {
                source: '/docs/graphql-api',
                destination: '/leasing/api',
                permanent: true,
            },
            {
                source: '/docs/graphql-api/getting-started/connecting',
                destination: '/leasing/api/getting-started/connecting',
                permanent: true,
            },
            {
                source: '/docs/graphql-api/getting-started/error-handling',
                destination: '/leasing/api/getting-started/error-handling',
                permanent: true,
            },
            {
                source: '/docs/graphql-api/getting-started/limitations',
                destination: '/leasing/api/getting-started/limitations',
                permanent: true,
            },
            {
                source: '/docs/graphql-api/getting-started/terms-and-conditions',
                destination:
                    '/leasing/api/getting-started/terms-and-conditions',
                permanent: true,
            },
            {
                source: '/docs/graphql-api/guides/about-graphql',
                destination: '/leasing/api/guides/about-graphql',
                permanent: true,
            },
            {
                source: '/docs/graphql-api/guides/leasing',
                destination: '/leasing/api/guides/leasing',
                permanent: true,
            },
            {
                source: '/docs/graphql-api/guides/changelog',
                destination: '/leasing/api/guides/changelog',
                permanent: true,
            },
            {
                source: '/docs/graphql-api/reference/queries',
                destination: '/leasing/api/reference/queries',
                permanent: true,
            },
            {
                source: '/docs/graphql-api/reference/mutations',
                destination: '/leasing/api/reference/mutations',
                permanent: true,
            },
            {
                source: '/docs/widgets/variants/button',
                destination: '/leasing/widgets/button',
                permanent: true,
            },
            {
                source: '/docs/widgets/variants/calculator',
                destination: '/leasing/widgets/calculator',
                permanent: true,
            },
            {
                source: '/docs/widgets/changelog',
                destination: '/leasing/widgets/changelog',
                permanent: true,
            },
        ]
    },
})
