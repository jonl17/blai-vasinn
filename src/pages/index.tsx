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
  return (
    <div className="bg-white text-black">
      <Marquee items={Array.from(Array(50)).map((_, idx) => `${2022 - idx}`)} />
    </div>
  )
}

export default Home
