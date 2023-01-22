import { PageLayout, Tables } from '@src/components'
import { TableProps } from '@src/types'
import { resolveDocumentToTableEntry, resolveLifespan } from '@src/utils'
import { GetStaticProps } from 'next'
import { createClient } from '@src/prismicio'
import { SiteSettingsDocument } from '@prismic-types'
import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

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

  const siteSettings = await client.getSingle('site_settings')

  return {
    props: {
      tables,
      siteSettings,
    },
  }
}

type Props = {
  tables: Array<TableProps>
  siteSettings: SiteSettingsDocument<string>
}

const ArtistsPage: NextPageWithLayout<Props> = ({ tables }) => {
  return <Tables label="Listamenn" tables={tables ?? []} />
}

ArtistsPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout siteSettings={page.props.siteSettings}>{page}</PageLayout>
}

export default ArtistsPage
