import { ArtistDocument } from '@prismic-types'
import { createClient } from 'prismicio'
import { useEffect, useState } from 'react'
import { Text } from '@src/components'

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
      {allArtists.map((artist, key) => (
        <Text variant="small" key={key}>
          {artist.data.fname}
        </Text>
      ))}
    </div>
  )
}
