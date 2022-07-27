import slugify from 'slugify'

export const generateArtistUrl = (fname: string) => {
  const slug = slugify(fname, { lower: true })
  return `/artist/${slug}`
}
