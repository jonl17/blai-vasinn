import { ArtistDocument } from '@prismic-types'
import { createClient } from '../../../prismicio'
import { useEffect, useState } from 'react'
import { AlphabetList, Text } from '@src/components'

export default function Artist() {
  const [allArtists, setAllArtists] = useState<Array<ArtistDocument>>([])

  useEffect(() => {
    const client = createClient()
    const fetchData = async () => {
      const artists = await client.getAllByType('artist')
      setAllArtists(artists)
    }
    fetchData()
  }, [])

  return (
    <div>
      <AlphabetList
        listOfDocuments={allArtists
          .filter((artist) => artist.data.fname !== null)
          .map((artist) => ({
            uid: artist.uid,
            name: artist.data.fname,
          }))}
      />
    </div>
  )
}
