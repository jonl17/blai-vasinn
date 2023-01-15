import { ParsedUrlQuery } from 'querystring'
import qs from 'query-string'
import { DocumentDocument } from '@prismic-types'
import { TableEntry } from './types'
import { asLink } from '@prismicio/helpers'

export const maintainQueryParams = (
  query: ParsedUrlQuery,
  url: string,
  hash?: string
) => {
  const q = qs.stringify(query)
  const h = hash ? `#${hash}` : ''
  return q ? `${url}?${q}${h}` : `${url}${h}`
}

export const resolveLifespan = (yearOfBirth: number, yearOfDeath?: number) =>
  `${yearOfBirth} - ${yearOfDeath ?? '?'}`

export const resolveDocumentToTableEntry = (
  doc: DocumentDocument
): TableEntry => ({
  category: doc.data.type,
  date: doc.data.date,
  origin: {
    label: doc.data.origin_label ?? '',
    url: asLink(doc.data.origin_link) ?? '/',
  },
  title: doc.data.title ?? '',
})
