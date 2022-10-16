import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.js',
  outputPath: '../src/sanity-types.ts',
}

export default config
