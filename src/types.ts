export interface IMenuItem {
  slug: string
  label: string
}

export interface IDocument {
  title: string
}

export interface IArtist {
  _id: string
  fname: string
  documents: Array<IDocument>
}
