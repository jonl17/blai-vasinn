import type { GetStaticProps, NextPage } from 'next'
import {
  aboutService,
  homepageService,
  seoService,
} from '@src/lib/sanityService'
import {
  SanityType_homepage,
  SanityType_interview,
  SanityKeyedReference,
  SanityType_artistText,
  SanityType_conversation,
} from '@src/sanity-types'
import TextAndPortraitThumbnail from '@src/components/TextAndPortraitThumbnail'
import React from 'react'
import { BasicThumbnail, SliceMachine } from '@src/components'

export const getStaticProps: GetStaticProps = async () => {
  const seo = await seoService()
  const about = await aboutService()
  const homepage = await homepageService()

  return {
    props: {
      seo,
      about,
      homepage,
    },
  }
}

type HomepageProps = {
  homepage: SanityType_homepage
}

const Home: NextPage<HomepageProps> = ({ homepage }) => {
  const components = homepage.components ?? []

  return (
    <div className="px-12 w-full d-flex flex-wrap">
      {components.map((cmp, key) => (
        // @ts-ignore
        <SliceMachine cmp={cmp} key={key} />
      ))}
    </div>
  )
}

export default Home
