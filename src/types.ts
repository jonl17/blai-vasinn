import { RTNode } from '@prismicio/types'

export type ImageType = {
  url: string
  alt?: string
  caption?: string
}

export type NavbarItemType =
  | { label: string; type: 'link'; url: string }
  | { label: string; type: 'button'; click: () => void }
