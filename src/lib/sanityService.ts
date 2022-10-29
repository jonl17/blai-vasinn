import {
  SanityType_about,
  SanityType_page,
  SanityType_seo,
} from '@src/sanity-types'
import { client } from './sanityClient'

export const seoService = (): Promise<SanityType_seo> =>
  // seo is a singleton so we target first in array
  client.fetch(`*[_type == "seo"]`).then((val) => val[0])

type Slug = Pick<SanityType_page, 'slug'>

export const allPageSlugsService = (): Promise<Array<Slug>> =>
  client.fetch(`*[_type == "page"] { slug }`)

export const pageBySlugService = (slug: string): Promise<SanityType_page> =>
  client
    .fetch(`*[_type == "page" && slug.current == "${slug}"]`)
    .then((val) => val[0])

export const aboutService = (): Promise<SanityType_about> =>
  client.fetch(`*[_type == "about"]`).then((val) => val[0])
