// main menu

export default {
  title: 'Main menu',
  name: 'mainMenu',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'menuName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Items',
      name: 'menuItems',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              title: 'Label',
              name: 'label',
            },
          ],
        },
      ],
    },
  ],
}
