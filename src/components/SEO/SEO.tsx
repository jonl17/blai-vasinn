import { SanityType_seo } from '@src/sanity-types'
import Head from 'next/head'

export default function SEO({ site_title, site_description }: SanityType_seo) {
  return (
    <Head>
      {site_title && <title>{site_title}</title>}
      {site_description && (
        <meta name="description" content={site_description} />
      )}
    </Head>
  )
}
