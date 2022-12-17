import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import { SEO } from '@src/components'
import PageLayout from '@src/components/PageLayout'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName="blai-vasinn">
        <SEO {...pageProps.seo} />
        <PageLayout siteSettings={pageProps.siteSettings}>
          <Component {...pageProps} />
        </PageLayout>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
