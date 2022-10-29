import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import {
  aboutService,
  allPageSlugsService,
  pageBySlugService,
  seoService,
} from '@src/lib/sanityService'
import { SanityType_page } from '@src/sanity-types'

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await allPageSlugsService()

  return {
    fallback: false,
    paths: slugs.map((item) => ({
      params: { slug: item.slug?.current },
    })),
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const currentPage = await pageBySlugService(params.slug as string)

  const seo = await seoService()
  const about = await aboutService()
  return {
    props: {
      seo,
      page: currentPage,
      about,
    },
  }
}

type Props = {
  page: SanityType_page
}

const SlugPage: NextPage<Props> = ({ page }) => {
  return <div>a sluggy named {page.title}</div>
}

export default SlugPage
