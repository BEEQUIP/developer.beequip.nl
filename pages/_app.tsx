import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/utility/apolloClient'
import { theme } from '@beequip/hexagon'
import '../node_modules/normalize.css/normalize.css'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Gotham Pro', sans-serif;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    @font-face {
        font-family: 'Gotham Pro';
        src: url('/fonts/GothamPro.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: fallback;
    }

    @font-face {
        font-family: 'Gotham Pro';
        src: url('/fonts/GothamPro-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: fallback;
    }

    @font-face {
        font-family: 'Gotham Pro';
        src: url('/fonts/GothamPro-Black.woff2') format('woff2');
        font-weight: 900;
        font-style: normal;
        font-display: fallback;
    }
`
export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = useApollo(pageProps)

    theme.font.default = `'Gotham Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;`
    theme.font.heading = `'Gotham Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;`

    return (
        <>
            <GlobalStyle />
            <ApolloProvider client={apolloClient}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ApolloProvider>
        </>
    )
}
