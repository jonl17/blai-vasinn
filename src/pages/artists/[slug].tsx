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
  *[_type == "artist" && _id == $id] {
    _id,
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

  const artist = await getClient().fetch(singleArtistQuery, { id: params.slug })

  return {
    props: {
      artist: artist[0],
    },
  }
}

const allArtistFnameQuery = groq`
  *[_type == "artist"] {
    _id,
    fname,
    documents[]->
  }
`

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await getClient().fetch(allArtistFnameQuery)
  const paths = result.map((result: { _id: string }) => ({
    params: { slug: `/artists/${result._id}` },
  }))

  return {
    paths,
    fallback: true,
  }
}
