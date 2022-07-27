import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import Link from 'next/link'
import { getClient } from '~/sanityLib/sanity'
import { IArtist } from '~/types'

type Props = {
  artists: Array<IArtist>
}

const AllArtistsPage: NextPage<Props> = ({ artists }) => {
  return (
    <div className="p-10 bg-black text-white h-screen">
      <h1 className="text-medium mb-3">Registered artists</h1>
      <div>
        <ul>
          {artists.map((artist, idx) => (
            <Link key={idx} passHref href={`/listamenn/${artist.slug.current}`}>
              <a>
                <li key={idx}>
                  <p className="underline">{artist.fname}</p>
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

const query = groq`
  *[_type == "artist"] | order(fname) {
    slug,
    fname,
    documents[]->,
    bio
  }
`

export const getStaticProps: GetStaticProps = async () => {
  const artists = await getClient().fetch(query)
  return {
    props: {
      artists,
    },
  }
}

export default AllArtistsPage
