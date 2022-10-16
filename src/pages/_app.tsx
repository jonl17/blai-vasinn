import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SEO } from '@src/components'
import { Seo } from '@src/sanity-types'

interface CustomAppProps extends AppProps {
  pageProps: {
    seo: Seo
  }
}

function MyApp({ Component, pageProps }: CustomAppProps) {
  return (
    <>
      <SEO {...pageProps.seo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
