export default {
  title: 'Homepage',
  name: 'homepage',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Components',
      name: 'components',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Thumbnail label',
              name: 'thumbnailLabel',
              type: 'string',
            },
            {
              title: 'Document',
              name: 'document',
              type: 'reference',
              to: [
                { type: 'interview' },
                { type: 'artistText' },
                { type: 'conversation' },
              ],
            },
          ],
          preview: {
            select: {
              title: 'document.title',
              subtitle: 'thumbnailLabel',
              media: 'document.thumbnailImage',
            },
          },
        },
      ],
    },
  ],
}
