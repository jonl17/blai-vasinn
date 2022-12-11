import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SEO } from '@src/components'
import { SanityType_about, SanityType_seo } from '@src/sanity-types'
import PageLayout from '@src/components/PageLayout'

interface CustomAppProps extends AppProps {
  pageProps: {
    seo: SanityType_seo
    about: SanityType_about
  }
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <SEO {...pageProps.seo} />
      <PageLayout about={pageProps.about}>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}

export default MyApp
