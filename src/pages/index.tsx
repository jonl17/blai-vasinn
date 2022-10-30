import type { GetStaticProps, NextPage } from 'next'
import {
  aboutService,
  homepageService,
  seoService,
} from '@src/lib/sanityService'
import {
  SanityType_homepage,
  SanityType_pocketInterview,
  SanityKeyedReference,
} from '@src/sanity-types'
import TextAndPortraitThumbnail from '@src/components/TextAndPortraitThumbnail'
import { ImageType } from '@src/types'
import React from 'react'

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

type ComponentTypes = SanityType_pocketInterview

const Home: NextPage<HomepageProps> = ({ homepage }) => {
  console.log(homepage)
  const components = homepage.components ?? ([] as Array<ComponentTypes>)

  console.log(components)

  const componentMap = (
    cmp: ComponentTypes | SanityKeyedReference<SanityType_pocketInterview>
  ) => {
    switch (cmp._type) {
      case 'pocketInterview': {
        return (
          <TextAndPortraitThumbnail
            label="Vasaviðtal"
            title={cmp.title ?? ''}
            text={cmp.thumbnailText ?? ''}
            portrait={{
              alt: cmp.thumbnailImage?.alt ?? '',
              caption: cmp.thumbnailImage?.caption ?? '',
              url: cmp.thumbnailImage?.url ?? '',
            }}
            url={cmp.slug?.current ?? ''}
          />
        )
      }
    }
  }

  return (
    <div className="px-12 w-full">
      {components.map((cmp, key) => (
        <React.Fragment key={key}>{componentMap(cmp)}</React.Fragment>
      ))}
    </div>
  )
}

export default Home
