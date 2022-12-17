import { createClient } from '../../../prismicio'
import { RTNode } from '@prismicio/types'
import { RichText, Text } from '@src/components'
import { useEffect, useState } from 'react'

export default function About() {
  const [text, setText] = useState<[RTNode]>()

  useEffect(() => {
    const client = createClient()

    const fetchData = async () => {
      const siteSettings = await client.getSingle('site_settings')
      setText(siteSettings.data.about as [RTNode])
    }

    fetchData()
  }, [])

  console.log(text)

  return (
    <section className="text-center">
      <Text className="mb-2" as="h1" variant="large">
        um:
      </Text>
      {text && <RichText text={text} />}
    </section>
  )
}
