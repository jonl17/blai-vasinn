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
              S.listItem()
                .title('About')
                .child(S.document().schemaType('about').documentId('about')),
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Pages')
        .child(S.documentList().title('All pages').filter('_type == "page"')),
      S.listItem()
        .title('Homepage')
        .child(S.document().schemaType('homepage').documentId('homepage')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['seo', 'mainMenu', 'page', 'homepage', 'about'].includes(
            listItem.getId()
          )
      ),
    ])
