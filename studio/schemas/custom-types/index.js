export const text = {
  title: 'Rich text',
  name: 'rich_text',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}

export const media = {
  title: 'Media',
  name: 'media',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
}

export const artist = {
  title: 'Artist',
  name: 'artist',
  type: 'document',
  fields: [
    {
      title: 'Full name',
      name: 'fname',
      type: 'string',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Documents',
      name: 'documents',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'rich_text' }, { type: 'media' }] },
      ],
    },
  ],
}
