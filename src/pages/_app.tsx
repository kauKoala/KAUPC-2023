import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/App/Layout'
import '@/styles/Config.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return(
        <>
            <Head>
                <link rel='icon' href="@/icons/favicon.ico" />
                <title>2023 한국항공대학교 프로그래밍 경진대회</title>
                <meta name="title" property="og:title" content="제3회 한국항공대학교 프로그래밍 경진대회" />
                <meta
                  name="description"
                  property="og:description"
                  content="프로그래밍에 관심이 있다면, 지금 바로 도전해보세요."
                />
                <meta
                name="image"
                property="og:image"
                content="https://user-images.githubusercontent.com/26535030/180230182-b010a812-f1d6-4dc2-94d7-4276d0bdea5d.png"
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp