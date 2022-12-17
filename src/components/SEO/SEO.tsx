import { ImageType } from '@src/types'
import Head from 'next/head'

type Props = {
  title: string
  description: string
  image: ImageType
}

export default function SEO({ title, description, image }: Props) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {image && <meta name="description" content={description} />}
    </Head>
  )
}
