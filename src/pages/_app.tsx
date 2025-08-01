import React from 'react'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { theme } from '@beequip/hexagon'
import '../../node_modules/normalize.css/normalize.css'
import { useApollo } from '@/utility/apolloClient'
import { Analytics } from '@vercel/analytics/next'

const gotham = localFont({
    src: [
        {
            path: '../../public/fonts/GothamSSm-Light_Web.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GothamSSm-Book_Web.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GothamSSm-Medium_Web.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GothamSSm-Bold_Web.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/GothamSSm-Black_Web.woff2',
            weight: '900',
            style: 'normal',
        },
    ],
})

/**
 * Nextra uses tailwind, which can be combined with our own Hexagon components.
 * However, it uses an element selector for all inputs that adds a box-shadow on
 * focus, which clashes with our own styling in Hexagon.
 * Couldn't find a way to stop tailwind from generating the conflicting CSS, so
 * add this hack to override the box-shadow.
 */
const GlobalStyle = createGlobalStyle`
    input[type=text]:focus-visible {
        outline: none !important;
        box-shadow: none !important;
    }
`

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = useApollo(pageProps)

    return (
        <>
            <GlobalStyle />
            <div className={gotham.className}>
                <ApolloProvider client={apolloClient}>
                    <ThemeProvider theme={theme}>
                        <Component {...pageProps} />
                    </ThemeProvider>
                </ApolloProvider>
            </div>
            <Analytics />
        </>
    )
}
