/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig, useTheme } from 'nextra-theme-docs'

const Logo = () => {
    const { resolvedTheme } = useTheme()

    const isDark = resolvedTheme === 'dark'

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 975.2 231.2"
            width="110px"
            height="31px"
        >
            <path
                d="M245 58h59.2c14.5 0 24.7 3.6 31.5 10.2 4.6 4.8 7.4 10.9 7.4 18.8v.3c0 13.4-7.4 21.3-17.8 25.7 14 4.6 22.9 12.5 22.9 28.2v.3c0 20-16 31.8-43.7 31.8H245V58Zm66.6 35.6c0-6.6-4.8-9.9-14.5-9.9h-20.9V104h20.1c9.9 0 15.3-3.3 15.3-10.1v-.3Zm4.7 43.2c0-6.4-4.9-10.4-15.7-10.4h-24.4v21.3h24.7c9.9 0 15.3-3.8 15.3-10.6v-.3Zm44-78.8h92.9v27.1H392v17.7h55.4V128H392v18.3h62v27.2h-93.7V58Zm108.3 0h92.9v27.1h-61.2v17.7h55.4V128h-55.4v18.3h62v27.2h-93.7V58Zm234.6 63.6V58h31.7v63c0 16.4 8.1 24.1 20.9 24.1s21.1-7.3 21.1-23.3V58h31.7v62.8c0 36.4-20.9 52.6-53.1 52.6s-52.3-16.2-52.3-51.8ZM826.6 58h32v115.5h-32V58Zm50.8 0h49.7c29 0 47.8 14.8 47.8 40.4v.3c0 27.4-20.9 41.7-49.5 41.7h-16v33h-32V58Zm47.4 57.4c11.2 0 18.3-5.9 18.3-15.2v-.3c0-9.9-7.1-15-18.5-15h-15.2v30.5h15.3Zm-234.5 0c0-31.9-25.4-57.4-59.7-57.4s-60 25.9-60 57.7v.3c0 31.9 25.4 57.4 59.7 57.4h56.2l-11.1-19.1c9.4-10.3 14.9-23.8 14.9-38.7v-.3Zm-88.1.6v-.3c0-16 11.3-30 28.1-30S659 99.8 659 116v.3c0 16-10.9 29.8-28.4 29.8S602.2 132 602.2 116"
                fill={isDark ? 'white' : 'black'}
            />
            <path
                d="M100 29.1 15 78.2v28.9L100 58l85 49.1V78.2l-85-49.1z"
                fill={isDark ? 'black' : '#ffa100'}
            />
            <path
                d="m160.8 35.4 13.1-22.6L166.7.2h-14.4l-13.1 22.6L100 .2 60.8 22.8 47.8.2H33.4l-7.2 12.5 13.1 22.6L0 58v115.5l100 57.7 100-57.7V58l-39.2-22.6ZM185 164.8l-85-49.1-85 49.1v-28.9l85-49.1 85 49.1v28.9Zm0-57.7L100 58l-85 49.1V78.2l85-49.1 85 49.1v28.9Z"
                fill={isDark ? 'white' : 'black'}
            />
            <path
                d="m100 115.7 85 49.1v-28.9l-85-49.1-85 49.1v28.9l85-49.1z"
                fill={isDark ? 'black' : '#ffa100'}
            />
        </svg>
    )
}

const config: DocsThemeConfig = {
    darkMode: true,
    docsRepositoryBase:
        'https://github.com/BEEQUIP/developer.beequip.nl/tree/master/',
    footer: {
        component: <></>,
    },
    head: () => {
        const { frontMatter } = useConfig()
        const { asPath } = useRouter()

        return (
            <>
                <title>
                    {asPath === '/'
                        ? 'Beequip for developers – Documentation'
                        : `${frontMatter.title} – Beequip Developer`}
                </title>
                {frontMatter.description ? (
                    <meta
                        name="description"
                        content={frontMatter.description}
                    />
                ) : null}

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon-96x96.png"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#ffa100" />
            </>
        )
    },
    logo: Logo,
    primaryHue: 38,
    primarySaturation: 100,
    project: {
        link: 'https://github.com/BEEQUIP/developer.beequip.nl',
    },
    useNextSeoProps() {
        const { asPath } = useRouter()

        if (asPath !== '/') {
            return {
                titleTemplate: '%s – Beequip Developer',
            }
        }
    },
}

export default config
