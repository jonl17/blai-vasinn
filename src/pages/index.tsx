import type { GetStaticProps, NextPage } from 'next'
import { aboutService, seoService } from '@src/lib/sanityService'
import { Text } from '@src/components'

export const getStaticProps: GetStaticProps = async () => {
  const seo = await seoService()
  const about = await aboutService()

  return {
    props: {
      seo,
      about,
    },
  }
}

const Home: NextPage = () => {
  return (
    <div>
      <Text variant="medium">
        {`Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.`}
      </Text>
    </div>
  )
}

export default Home
