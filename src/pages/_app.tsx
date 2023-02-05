import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import { SEO } from '@src/components'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import type { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName="blai-vasinn">
        <SEO {...pageProps.seo} />
        <main className="bg-white text-black min-h-screen">
          {getLayout(<Component {...pageProps} />)}
        </main>
      </PrismicPreview>
    </PrismicProvider>
  )
}
