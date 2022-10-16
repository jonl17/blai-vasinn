import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Marquee, SEO } from '@src/components'
import { Seo } from '@src/sanity-types'
import PageLayout from '@src/components/PageLayout'

interface CustomAppProps extends AppProps {
  pageProps: {
    seo: Seo
  }
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <SEO {...pageProps.seo} />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}

export default MyApp
