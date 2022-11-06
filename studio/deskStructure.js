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
      S.divider(),
      S.listItem()
        .title('Documents')
        .child(
          S.list()
            .title('Documents')
            .items([
              S.listItem()
                .title('Viðtal')
                .child(
                  S.documentList()
                    .title('Viðtal')
                    .filter('_type == "interview"')
                ),
              S.listItem()
                .title('Eigin skrif')
                .child(
                  S.documentList()
                    .title('Eigin skrif')
                    .filter('_type == "artistText"')
                ),
              S.listItem()
                .title('Samtal')
                .child(
                  S.documentList()
                    .title('Samtal')
                    .filter('_type == "conversation"')
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'seo',
            'mainMenu',
            'page',
            'homepage',
            'about',
            'interview',
            'artistText',
            'conversation',
          ].includes(listItem.getId())
      ),
    ])
