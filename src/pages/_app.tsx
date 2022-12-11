import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SEO } from '@src/components'
import PageLayout from '@src/components/PageLayout'

function MyApp({ Component, pageProps }: AppProps) {
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
