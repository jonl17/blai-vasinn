import { Marquee } from '@src/components'
import type { GetStaticProps, NextPage } from 'next'
import { seoService } from '@src/lib/sanityService'

export const getStaticProps: GetStaticProps = async () => {
  const seo = await seoService()
  return {
    props: {
      seo,
    },
  }
}

const Home: NextPage = () => {
  return <div>the homepage</div>
}

export default Home
