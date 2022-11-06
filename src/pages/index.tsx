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
import { BasicThumbnail } from '@src/components'
import { ImageType } from '@src/types'

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

type ComponentTypes =
  | SanityType_interview
  | SanityType_artistText
  | SanityType_conversation

const Home: NextPage<HomepageProps> = ({ homepage }) => {
  const components = homepage.components ?? ([] as Array<ComponentTypes>)

  const componentMap = (
    cmp: {
      document: ComponentTypes | SanityKeyedReference<SanityType_interview>
      thumbnailLabel: string
    },
    key: number
  ) => {
    switch (cmp.document._type) {
      case 'interview': {
        return (
          <TextAndPortraitThumbnail
            label={cmp.thumbnailLabel}
            title={cmp.document.title ?? ''}
            text={cmp.document.thumbnailText ?? ''}
            portrait={{
              alt: cmp.document.thumbnailImage?.alt ?? '',
              caption: cmp.document.thumbnailImage?.caption ?? '',
              // @ts-ignore
              url: cmp.document.thumbnailImage?.url ?? '',
            }}
            url={cmp.document.slug?.current ?? ''}
          />
        )
      }
      case 'artistText': {
        return (
          <BasicThumbnail
            label={cmp.thumbnailLabel ?? ''}
            title={cmp.document.title ?? ''}
            image={{
              alt: cmp.document.thumbnailImage?.alt ?? '',
              caption: cmp.document.thumbnailImage?.caption ?? '',
              // @ts-ignore
              url: cmp.document.thumbnailImage?.url ?? '',
            }}
            url={cmp.document.slug?.current ?? ''}
          />
        )
      }
      // case 'conversation': {
      //   return (
      //     <BasicThumbnail
      //       variant="thin"
      //       label={cmp.thumbnailLabel ?? ''}
      //       title={cmp.document.title ?? ''}
      //       image={{
      //         alt: cmp.document.thumbnailImage?.alt ?? '',
      //         caption: cmp.document.thumbnailImage?.caption ?? '',
      //         // @ts-ignore
      //         url: cmp.document.thumbnailImage?.url ?? '',
      //       }}
      //       url={cmp.document.slug?.current ?? ''}
      //     />
      //   )
      // }
    }
  }

  return (
    <div className="px-12 w-full d-flex flex-wrap">
      {components.map((cmp, key) => (
        <React.Fragment key={key}>
          {componentMap(cmp as any, key)}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Home
