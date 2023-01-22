import { HomepageDocument, SiteSettingsDocument } from '@prismic-types'
import { PageLayout } from '@src/components'
import { createClient } from '@src/prismicio'
import type { GetStaticProps } from 'next'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const homepage = await client.getSingle('homepage')
  const seo = {
    title: homepage.data.seo_title,
    description: homepage.data.seo_description,
    image: homepage.data.seo_image,
  }
  const siteSettings = await client.getSingle('site_settings')

  return {
    props: {
      homepage,
      seo,
      siteSettings,
    },
  }
}

type Props = {
  homepage: HomepageDocument
  siteSettings: SiteSettingsDocument<string>
}

const Home: NextPageWithLayout<Props> = () => {
  return <p>þetta er forsíðan</p>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout siteSettings={page.props.siteSettings}>{page}</PageLayout>
}

export default Home
