/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const logo = (
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 130.9 20.59"
        width="200px"
        height="31px"
    >
        <path
            fill="currentColor"
            d="M10.61 5.65 13.26.3l-.64-.32-2.63 5.31-2.55-1.45L4.9 5.29 2.26-.03l-.64.31 2.66 5.37-4 2.29v2.12l7.16-4.09 7.16 4.13V7.93l-3.99-2.28"
        />
        <path
            fill="currentColor"
            d="m7.44 7.78-7.16 4.1v2.13l7.16-4.09 7.16 4.13v-2.13L7.44 7.78"
        />
        <path
            fill="currentColor"
            d="m7.44 11.83-7.16 4 7.16 4.27 7.16-4.27zM19.34 7.94h4.04c.5 0 .92.06 1.27.18s.65.3.88.53c.16.16.28.34.37.55.09.21.14.45.14.72v.02c0 .46-.11.83-.34 1.11-.23.28-.52.5-.87.65.48.16.86.39 1.15.68.28.3.42.71.42 1.25v.02c0 .68-.26 1.22-.78 1.6-.52.38-1.26.57-2.2.57h-4.07V7.94zm3.5 3.15c.34 0 .6-.06.77-.17.18-.11.26-.29.26-.52v-.02c0-.22-.08-.38-.25-.5-.17-.12-.41-.17-.74-.17h-1.42v1.39h1.38zm.32 2.98c.34 0 .6-.06.78-.19.18-.12.27-.3.27-.54v-.02c0-.22-.09-.39-.26-.52s-.44-.19-.81-.19h-1.67v1.45h1.69zM27.15 7.94h6.33V9.8H29.3V11h3.79v1.72H29.3v1.25h4.24v1.86h-6.39V7.94zM34.6 7.94h6.33V9.8h-4.18V11h3.79v1.72h-3.79v1.25H41v1.86h-6.4V7.94zM55.05 15.84c-.57 0-1.08-.07-1.53-.22-.45-.14-.84-.37-1.16-.66-.32-.3-.56-.68-.73-1.14-.17-.46-.26-1-.26-1.62V7.94h2.25v4.21c0 .58.13 1 .39 1.28s.62.41 1.06.41.8-.13 1.06-.4.39-.68.39-1.24V7.94h2.25v4.2c0 .64-.09 1.2-.27 1.66-.18.47-.43.85-.75 1.15-.32.3-.71.52-1.17.66-.45.16-.96.23-1.53.23zM59.89 7.94h2.2v7.89h-2.2V7.94zM63.21 7.94h3.38c.5 0 .95.06 1.35.19.41.12.75.3 1.04.54.29.24.51.53.66.87.15.35.23.74.23 1.17v.02c0 .47-.08.88-.25 1.23-.17.35-.4.65-.7.89-.3.24-.66.42-1.08.54-.42.12-.87.18-1.36.18H65.4v2.25h-2.19V7.94zm3.22 3.92c.39 0 .7-.09.92-.28.22-.19.33-.44.33-.75v-.02c0-.34-.11-.6-.33-.78-.22-.18-.53-.27-.93-.27h-1.03v2.1h1.04z"
        />
        <path
            fill="currentColor"
            d="M44.22 11.91v-.02c0-1.09.77-2.05 1.92-2.05 1.17 0 1.96.96 1.96 2.07v.02c0 1.1-.74 2.04-1.94 2.04-1.16 0-1.94-.97-1.94-2.06zm6.02-.04c0-2.18-1.74-3.92-4.08-3.92s-4.1 1.77-4.1 3.95v.02c0 2.18 1.74 3.92 4.08 3.92h3.84l-.76-1.3a3.9 3.9 0 0 0 1.02-2.64v-.03z"
        />
        <path
            fill="#ffa100"
            d="M74.43 7.94h2.74c2.48 0 4.19 1.7 4.19 3.92v.02c0 2.22-1.71 3.95-4.19 3.95h-2.74V7.94zm.89.83v6.25h1.85c2 0 3.27-1.34 3.27-3.1v-.02c0-1.75-1.27-3.12-3.27-3.12h-1.85zM82.74 12.94v-.02c0-1.68 1.17-3.03 2.8-3.03 1.73 0 2.72 1.38 2.72 3.08 0 .12 0 .18-.01.28h-4.62c.12 1.26 1.02 1.97 2.05 1.97.81 0 1.35-.33 1.84-.82l.54.48c-.59.67-1.29 1.09-2.4 1.09-1.6 0-2.92-1.23-2.92-3.03zm4.64-.34c-.09-1.05-.69-1.98-1.86-1.98-1.03 0-1.77.86-1.89 1.98h3.75zM88.93 10.01h.96l1.96 4.84 1.97-4.84h.94l-2.54 5.87h-.77l-2.52-5.87zM95.43 12.94v-.02c0-1.68 1.17-3.03 2.8-3.03 1.73 0 2.72 1.38 2.72 3.08 0 .12 0 .18-.01.28h-4.62c.12 1.26 1.02 1.97 2.05 1.97.81 0 1.35-.33 1.84-.82l.54.48c-.59.67-1.29 1.09-2.4 1.09-1.6 0-2.92-1.23-2.92-3.03zm4.63-.34c-.09-1.05-.69-1.98-1.86-1.98-1.03 0-1.77.86-1.89 1.98h3.75zM102.54 7.61h.87v8.23h-.87V7.61zM105.07 12.95v-.02c0-1.66 1.27-3.04 3.04-3.04 1.76 0 3.03 1.38 3.03 3.02v.02c0 1.66-1.3 3.04-3.06 3.04-1.73 0-3.01-1.37-3.01-3.02zm5.19 0v-.02c0-1.25-.94-2.28-2.17-2.28-1.26 0-2.13 1.03-2.13 2.26v.02c0 1.25.92 2.27 2.15 2.27 1.27-.01 2.15-1.03 2.15-2.25zM112.72 10.01h.87v1.17c.48-.69 1.15-1.3 2.23-1.3 1.4 0 2.79 1.11 2.79 3.02v.02c0 1.89-1.38 3.03-2.79 3.03-1.08 0-1.78-.58-2.23-1.24v2.92h-.87v-7.62zm5 2.93v-.02c0-1.39-.94-2.26-2.05-2.26-1.08 0-2.11.92-2.11 2.24v.02c0 1.35 1.03 2.26 2.11 2.26 1.12 0 2.05-.83 2.05-2.24zM119.85 12.94v-.02c0-1.68 1.17-3.03 2.8-3.03 1.73 0 2.72 1.38 2.72 3.08 0 .12 0 .18-.01.28h-4.62c.12 1.26 1.02 1.97 2.05 1.97.81 0 1.35-.33 1.84-.82l.54.48c-.59.67-1.29 1.09-2.4 1.09-1.6 0-2.92-1.23-2.92-3.03zm4.64-.34c-.09-1.05-.69-1.98-1.86-1.98-1.03 0-1.77.86-1.89 1.98h3.75zM126.89 10.01h.87v1.52c.43-.97 1.27-1.66 2.38-1.62v.94h-.07c-1.27 0-2.31.91-2.31 2.67v2.32h-.87v-5.83z"
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
