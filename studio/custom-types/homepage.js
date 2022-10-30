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
      of: [{ type: 'reference', to: [{ type: 'pocketInterview' }] }],
    },
  ],
}
