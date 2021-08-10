import NextHead from 'next/head'

interface Props {
    title: string
    titlePrefix?: string
    titleSuffix?: string
    description?: string
}

export function Head(props: Props): JSX.Element {
    const titlePrefix =
        null != props.titlePrefix ? props.titlePrefix : 'Beequip – '
    const titleSuffix = null != props.titleSuffix ? props.titleSuffix : ''

    return (
        <NextHead>
            <title>{titlePrefix + props.title + titleSuffix}</title>
            {props.description ? (
                <meta name="description" content={props.description} />
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
        </NextHead>
    )
}
