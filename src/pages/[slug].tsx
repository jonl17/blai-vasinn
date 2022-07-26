import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { DUMMY_MENU } from '~/dummy'

type Props = {
  slug: string
}

const SlugPage: NextPage<Props> = ({ slug }) => {
  return (
    <div className="p-10 bg-black text-white h-screen">{`${slug} is the slug`}</div>
  )
}

export default SlugPage

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    }
  }

  // TODO: fetch items from sanity db

  return {
    props: {
      slug: context.params.slug,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const menu = DUMMY_MENU
  return {
    paths: menu.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  }
}
