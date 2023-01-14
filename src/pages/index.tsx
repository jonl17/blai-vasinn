import { HomepageDocument } from '@prismic-types'
import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { createClient } from '../../prismicio'

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
}

const Home: NextPage<Props> = ({ homepage }) => {
  return (
    <div className="px-12 w-full d-flex flex-wrap">
      {/* {components.map((cmp, key) => (
        // @ts-ignore
        <SliceMachine cmp={cmp} key={key} />
      ))} */}
    </div>
  )
}

export default Home
