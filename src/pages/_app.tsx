import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import { SEO } from '@src/components'
import PageLayout from '@src/components/PageLayout'
import { SidebarProvider } from '@src/context/sidebar'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName="blai-vasinn">
        <SEO {...pageProps.seo} />
        <SidebarProvider>
          <PageLayout siteSettings={pageProps.siteSettings}>
            <Component {...pageProps} />
          </PageLayout>
        </SidebarProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
