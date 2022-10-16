import { Seo } from '@src/sanity-types'
import { client } from './sanityClient'

export const seoService = (): Promise<Seo> =>
  // seo is a singleton so we target first in array
  client.fetch(`*[_type == "seo"]`).then((val) => val[0])
