// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import seo from '../custom-types/singletons/seo'
import mainMenu from '../custom-types/singletons/main-menu'
import page from '../custom-types/page'
import homepage from '../custom-types/homepage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([seo, mainMenu, page, homepage]),
})