export default {
  title: 'Pocket interview',
  name: 'pocketInterview',
  type: 'document',
  fields: [
    {
      title: 'title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Thumbnail text',
      name: 'thumbnailText',
      type: 'text',
      description: 'This text has a limit of 280 characters.',
      validation: (Rule) =>
        Rule.required().min(10).max(280).warning('Text is too long!'),
    },
    {
      title: 'Thumbnail image',
      name: 'thumbnailImage',
      type: 'image',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'alt',
          type: 'string',
          title: 'alt',
        },
      ],
    },
  ],
}
