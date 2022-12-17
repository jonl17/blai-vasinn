import type { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { createClient } from '../../prismicio'

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData })

  const siteSettings = await client.getSingle('site_settings')

  return {
    props: {
      siteSettings,
    },
  }
}

type Props = {
  test: any
}

const Listamenn: NextPage<Props> = ({ test }) => {
  return (
    <div className="px-12 w-full d-flex flex-wrap">
      {/* {components.map((cmp, key) => (
        // @ts-ignore
        <SliceMachine cmp={cmp} key={key} />
      ))} */}
    </div>
  )
}

export default Listamenn
