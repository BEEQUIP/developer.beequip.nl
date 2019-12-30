import NextHead from 'next/head'

interface Props {
    title: string
    titlePrefix?: string
    titleSuffix?: string
    description?: string
}

export const Head = (props: Props) => {
    const titlePrefix =
        null != props.titlePrefix ? props.titlePrefix : 'Beequip – '
    const titleSuffix = null != props.titleSuffix ? props.titleSuffix : ''

    return (
        <NextHead>
            <title>{titlePrefix + props.title + titleSuffix}</title>
            {props.description ? (
                <meta name="description" content={props.description} />
            ) : null}
        </NextHead>
    )
}
