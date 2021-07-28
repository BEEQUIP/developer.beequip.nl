import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Page } from '@/types/pages'

export function usePages(): { directories: Page[] } {
    const { asPath } = useRouter()

    return useMemo(() => {
        // TODO Use the pageMap from Nextra to create a directory tree
        const directories = [
            {
                name: 'graphql-api',
                navigationTitle: 'GraphQL API',
                route: '/docs/graphql-api',
                isDirectory: true,
                isActive: asPath.startsWith('/docs/graphql-api'),
                children: [
                    {
                        name: 'getting-started',
                        navigationTitle: 'Getting started',
                        route: '/docs/graphql-api/getting-started',
                        isDirectory: true,
                        isActive: asPath.startsWith(
                            '/docs/graphql-api/getting-started'
                        ),
                        children: [
                            {
                                name: 'connecting',
                                navigationTitle: 'Connecting',
                                route: '/docs/graphql-api/getting-started/connecting',
                                isDirectory: false,
                                isActive:
                                    asPath ===
                                    '/docs/graphql-api/getting-started/connecting',
                            },
                            {
                                name: 'error-handling',
                                navigationTitle: 'Error-handling',
                                route: '/docs/graphql-api/getting-started/error-handling',
                                isDirectory: false,
                                isActive:
                                    asPath ===
                                    '/docs/graphql-api/getting-started/error-handling',
                            },
                            {
                                name: 'limitations',
                                navigationTitle: 'Limitations',
                                route: '/docs/graphql-api/getting-started/limitations',
                                isDirectory: false,
                                isActive:
                                    asPath ===
                                    '/docs/graphql-api/getting-started/limitations',
                            },
                        ],
                    },
                    {
                        name: 'guides',
                        navigationTitle: 'Guides',
                        route: '/docs/graphql-api/guides',
                        isDirectory: true,
                        isActive: asPath.startsWith('/docs/graphql-api/guides'),
                        children: [
                            {
                                name: 'about-graphql',
                                navigationTitle: 'About Graphql',
                                route: '/docs/graphql-api/guides/about-graphql',
                                isDirectory: false,
                                isActive:
                                    asPath ===
                                    '/docs/graphql-api/guides/about-graphql',
                            },
                            {
                                name: 'leasing',
                                navigationTitle: 'Leasing',
                                route: '/docs/graphql-api/guides/leasing',
                                isDirectory: false,
                                isActive:
                                    asPath ===
                                    '/docs/graphql-api/guides/leasing',
                            },
                        ],
                    },
                    {
                        name: 'reference',
                        navigationTitle: 'Reference',
                        route: '/docs/graphql-api/reference',
                        isDirectory: true,
                        isActive: asPath.startsWith(
                            '/docs/graphql-api/reference'
                        ),
                        children: [
                            {
                                name: 'queries',
                                navigationTitle: 'Queries',
                                route: '/docs/graphql-api/reference/queries',
                                isDirectory: false,
                                isActive:
                                    asPath ===
                                    '/docs/graphql-api/reference/queries',
                            },
                            {
                                name: 'mutations',
                                navigationTitle: 'Mutations',
                                route: '/docs/graphql-api/reference/mutations',
                                isDirectory: false,
                                isActive:
                                    asPath ===
                                    '/docs/graphql-api/reference/mutations',
                            },
                        ],
                    },
                ],
            },
            {
                name: 'widgets',
                navigationTitle: 'Widgets',
                route: '/docs/widgets',
                isDirectory: true,
                isActive: asPath.startsWith('/docs/widgets'),
                children: [
                    {
                        name: 'calculator',
                        navigationTitle: 'Calculator',
                        route: '/docs/widgets/calculator',
                        isDirectory: false,
                        isActive: asPath === '/docs/widgets/calculator',
                    },
                ],
            },
        ]

        return {
            directories,
        }
    }, [asPath])
}
