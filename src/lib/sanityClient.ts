import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-10-22',
})

export { client }
