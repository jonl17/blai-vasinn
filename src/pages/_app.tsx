import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SEO } from '@src/components'
import { SanityType_about, SanityType_seo } from '@src/sanity-types'
import PageLayout from '@src/components/PageLayout'
import localFont from '@next/font/local'

export const GraebenbachRegular = localFont({
  src: '../../public/fonts/Graebenbach-Regular.woff',
})
export const GraebenbachRegularItalic = localFont({
  src: '../../public/fonts/Graebenbach-RegularItalic.woff',
})
export const GraebenbachMonoRegular = localFont({
  src: '../../public/fonts/GraebenbachMono-Regular.woff',
})
export const ClarendonBold = localFont({
  src: '../../public/fonts/clarendon-bold.woff2',
})
export const ClarendonRegular = localFont({
  src: '../../public/fonts/clarendon-regular.woff2',
})

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
