import { Navbar } from './navbar'
import { Head } from '@/components/head'
import { Footer } from '@/components/footer'

export function HomeLayout(props): JSX.Element {
    const { meta } = props

    return (
        <>
            <Head
                title={meta.title}
                description={meta.description}
                titlePrefix=""
                titleSuffix=""
            />
            <Navbar />
            {props.children}
            <Footer renderFor="home" />
        </>
    )
}
