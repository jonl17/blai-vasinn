import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { createClient } from '../../prismicio'
import { HomepageDocument } from '@prismic-types'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const homepage = await client.getSingle('homepage')

  return {
    props: {
      homepage,
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
