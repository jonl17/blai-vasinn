import { createClient } from '../../../prismicio'
import { RTNode } from '@prismicio/types'
import { RichText, Text } from '@src/components'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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

  return (
    <section className="text-center">
      <Text className="mb-2" as="h1" variant="large">
        um:
      </Text>
      <AnimatePresence>
        {text && (
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <RichText text={text} />
          </motion.span>
        )}
      </AnimatePresence>
    </section>
  )
}
