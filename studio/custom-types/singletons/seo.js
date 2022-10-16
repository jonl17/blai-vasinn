// site settings

export default {
  title: 'SEO',
  name: 'seo',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  fields: [
    {
      title: 'Site title',
      name: 'site_title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Site description',
      name: 'site_description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
  ],
}
