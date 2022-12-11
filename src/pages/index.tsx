import type { GetStaticProps, NextPage } from 'next'
import TextAndPortraitThumbnail from '@src/components/TextAndPortraitThumbnail'
import React from 'react'

export const getStaticProps: GetStaticProps = async () => {
  // const seo = await seoService()
  // const about = await aboutService()
  // const homepage = await homepageService()

  return {
    props: {
      test: 9,
    },
  }
}

const Home: NextPage = () => {
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
