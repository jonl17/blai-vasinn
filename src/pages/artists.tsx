import { Tables } from '@src/components'
import { TableProps } from '@src/types'
import { resolveDocumentToTableEntry, resolveLifespan } from '@src/utils'
import { GetStaticProps } from 'next'
import { createClient } from 'prismicio'

export const getStaticProps: GetStaticProps<{
  tables: Array<TableProps>
}> = async ({ previewData }) => {
  // get all artists WITH documents
  // resolve to table entries
  const client = createClient({ previewData })
  const allArtists = await client.getAllByType('artist', {
    graphQuery: `
    {
      artist {
      ...artistFields
        documents {
          document {
            ...documentFields
          }
        }
      }
    }
    `,
  })

  const artistsWithDocs = allArtists.filter(
    (item) => item.data.documents.length > 0
  )

  const tables: Array<TableProps> = artistsWithDocs.map((artist) => ({
    title: artist.data.fname as string,
    subtitle: resolveLifespan(
      artist.data.year_of_birth as number,
      artist.data.year_of_death as number | undefined
    ),
    data: artist.data.documents.map((doc) =>
      resolveDocumentToTableEntry(doc.document as any)
    ),
  }))

  return {
    props: {
      tables,
    },
  }
}

type Props = {
  tables: Array<TableProps>
}

export default function ArtistsPage({ tables }: Props) {
  return <Tables label="Listamenn" tables={tables ?? []} />
}
