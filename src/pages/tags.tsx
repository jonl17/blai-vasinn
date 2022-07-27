import type { GetStaticProps, NextPage } from 'next'
import { groq } from 'next-sanity'
import Link from 'next/link'
import { getClient } from '~/sanityLib/sanity'
import { IArtist } from '~/types'

type Props = {
  tags: string[]
}

const AllTagsPage: NextPage<Props> = ({ tags }) => {
  console.log(tags)
  return (
    <div className="p-10 bg-black text-white h-screen">
      <h1 className="text-medium mb-3">{`Registered tags (${tags.length})`}</h1>
      <div>
        <ul>
          {tags.map((tag, idx) => (
            <li key={idx}>
              <p className="underline">{tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const query = groq`
  *[_type == "media" || _type == "rich_text"] {
    tags
  }
`

export const getStaticProps: GetStaticProps = async () => {
  const result = await getClient().fetch(query)
  let tags: string[] = []
  result.forEach((doc: any) => {
    doc.tags.forEach((tag: string) => tags.push(tag))
  })
  return {
    props: {
      tags,
    },
  }
}

export default AllTagsPage
