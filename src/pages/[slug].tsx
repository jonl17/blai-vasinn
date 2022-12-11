import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: [],
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      test: 'fredo',
    },
  }
}

const SlugPage: NextPage = () => {
  const { isFallback } = useRouter()

  if (isFallback) return <p>loading</p>

  return <div>a sluggy named jeff bassoos</div>
}

export default SlugPage
