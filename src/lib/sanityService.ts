import { Page, Seo } from '@src/sanity-types'
import { client } from './sanityClient'

export const seoService = (): Promise<Seo> =>
  // seo is a singleton so we target first in array
  client.fetch(`*[_type == "seo"]`).then((val) => val[0])

type Slug = Pick<Page, 'slug'>

export const allPageSlugsService = (): Promise<Array<Slug>> =>
  client.fetch(`*[_type == "page"] { slug }`)

export const pageBySlugService = (slug: string): Promise<Page> =>
  client
    .fetch(`*[_type == "page" && slug.current == "${slug}"]`)
    .then((val) => val[0])
