// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site settings')
        .child(
          S.list()
            .title('Site settings')
            .items([
              S.listItem()
                .title('SEO')
                .child(S.document().schemaType('seo').documentId('seo')),
              S.listItem()
                .title('Main menu')
                .child(
                  S.document().schemaType('mainMenu').documentId('mainMenu')
                ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['seo', 'mainMenu'].includes(listItem.getId())
      ),
    ])
