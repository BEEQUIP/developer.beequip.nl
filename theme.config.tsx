/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const logo = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 818.05 230.49"
        x="0"
        y="0"
        width="110px"
        height="31px"
    >
        <path
            fill="currentColor"
            d="m0 183.47 81.83 47.02 81.83-47.02-81.83-47.02L0 183.47z"
        />
        <path
            fill="currentColor"
            d="M81.83 89.44 0 136.45v23.51l81.83-47.02 81.83 47.02v-23.51L81.83 89.44z"
        />
        <path
            fill="currentColor"
            d="m117.76 63.07 34.05-58.98L144.72 0l-34.05 58.99-28.84-16.57L53 58.99 18.94 0l-7.09 4.09L45.9 63.07 0 89.44v23.5l81.83-47.01 81.83 47.01v-23.5l-45.9-26.37z"
        />
        <path
            fill="currentColor"
            d="M223.66 89.44h48.22c11.82 0 20.15 2.96 25.66 8.33 3.76 3.9 6.04 8.86 6.04 15.31v.27c0 10.88-6.04 17.33-14.51 20.95 11.42 3.76 18.67 10.21 18.67 22.97v.27c0 16.25-13.03 25.92-35.6 25.92h-48.49V89.43Zm54.27 29.01c0-5.37-3.9-8.06-11.82-8.06h-17.06v16.52h16.39c8.06 0 12.49-2.69 12.49-8.19v-.27Zm3.76 35.19c0-5.24-4.03-8.46-12.76-8.46h-19.88v17.33h20.15c8.06 0 12.49-3.09 12.49-8.6v-.27Z"
        />
        <path
            fill="currentColor"
            d="M317.58 89.44h75.62v22.03h-49.83v14.37h45.13v20.55h-45.13v14.91h50.51v22.16h-76.3V89.43Z"
        />
        <path
            fill="currentColor"
            d="M405.71 89.44h75.62v22.03H431.5v14.37h45.13v20.55H431.5v14.91h50.51v22.16h-76.3V89.43Z"
        />
        <path
            fill="currentColor"
            d="M596.78 141.26V89.43h25.85v51.3c0 13.32 6.59 19.65 17.01 19.65s17.14-5.93 17.14-18.99V89.43h25.85v51.17c0 29.67-17.01 42.86-43.26 42.86s-42.6-13.19-42.6-42.2ZM697.27 89.44h26.06v94.03h-26.06V89.44ZM738.66 89.44h40.43c23.64 0 38.95 12.09 38.95 32.91v.27c0 22.3-17.06 33.98-40.3 33.98h-13.03v26.87h-26.06V89.44Zm38.55 46.74c9.13 0 14.91-4.84 14.91-12.36v-.27c0-8.06-5.78-12.22-15.04-12.22h-12.36v24.85h12.49ZM586.3 136.19c0-25.96-20.7-46.76-48.63-46.76s-48.89 21.05-48.89 47.02v.26c0 25.96 20.69 46.75 48.63 46.75h45.8l-9.06-15.53c7.66-8.36 12.14-19.39 12.14-31.48v-.26Zm-71.77.52v-.26c0-13.05 9.18-24.41 22.89-24.41s23.41 11.49 23.41 24.67v.26c0 13.07-8.86 24.28-23.15 24.28s-23.15-11.49-23.15-24.54"
        />
    </svg>
)

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
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#ffa100"
                />
                <meta name="msapplication-TileColor" content="#ffa100" />
                <meta name="theme-color" content="#ffa100" />
            </>
        )
    },
    logo,
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
