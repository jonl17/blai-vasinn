import { DateField } from '@prismicio/types'

export type ImageType = {
  url: string
  alt?: string
  caption?: string
}

export type NavbarItemType =
  | { label: string; type: 'link'; url: string }
  | { label: string; type: 'button'; click: () => void }

type Origin = { label: string; url: string }

export type TableEntry = {
  date: DateField
  title: string
  origin: Origin
  category: string
}

export type TableProps = {
  title: string
  subtitle?: string
  data: Array<TableEntry>
}
