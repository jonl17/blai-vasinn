import { ParsedUrlQuery } from 'querystring'
import qs from 'query-string'

export const maintainQueryParams = (
  query: ParsedUrlQuery,
  url: string,
  hash?: string
) => {
  const q = qs.stringify(query)
  const h = hash ? `#${hash}` : ''
  return q ? `${url}?${q}${h}` : `${url}${h}`
}
