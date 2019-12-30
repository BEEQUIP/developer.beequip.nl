import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@beequip/hexagon'

export default class DeveloperApp extends App {
    render() {
        const { Component, pageProps } = this.props
        theme.font.default = `'Gotham Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;`
        theme.font.heading = `'Gotham Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;`

        return (
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        )
    }
}
