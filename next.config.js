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
        ]
    },
})
