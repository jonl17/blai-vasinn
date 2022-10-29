// site settings

export default {
  title: 'About',
  name: 'about',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  type: 'document',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }],
      options: {
        spellCheck: false,
      },
    },
  ],
}
