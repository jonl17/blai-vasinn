import { Seo } from '@src/sanity-types'
import Head from 'next/head'

export default function SEO({ site_title, site_description }: Seo) {
  return (
    <Head>
      {site_title && <title>{site_title}</title>}
      {site_description && (
        <meta name="description" content={site_description} />
      )}
    </Head>
  )
}
