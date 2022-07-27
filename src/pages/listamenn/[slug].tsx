import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import { getClient } from '~/sanityLib/sanity'
import { IArtist } from '~/types'
import { useRouter } from 'next/router'

type Props = {
  artist: IArtist
}

const SingleArtistPage: NextPage<Props> = ({ artist }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div className="p-10 bg-black text-white h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="p-10 bg-black text-white h-screen">
      <h1 className="text-medium">{artist.fname}</h1>
      {artist.documents ? (
        <div>
          <p className="text-lead">{`total documents (${artist.documents.length}):`}</p>
          <ul>
            {artist.documents.map((document, key) => (
              <li key={key}>
                <p className="italic">{document.title}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No documents</p>
      )}
    </div>
  )
}

export default SingleArtistPage

const singleArtistQuery = groq`
  *[_type == "artist" && slug.current == $slug] {
    slug,
    fname,
    documents[]->
  }
`

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  if (!params) {
    return {
      notFound: true,
    }
  }

  const artist = await getClient().fetch(singleArtistQuery, {
    slug: params.slug,
  })

  return {
    props: {
      artist: artist[0],
    },
  }
}

const allArtistSlugsQuery = groq`
  *[_type == "artist"] {
    slug
  }
`

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await getClient().fetch(allArtistSlugsQuery)
  const paths = result.map((result: { slug: { current: string } }) => ({
    params: { slug: result.slug.current },
  }))

  return {
    paths,
    fallback: false,
  }
}
