import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.js',
  outputPath: '../src/sanity-types.ts',
  generateTypeName: (typeName) => `SanityType_${typeName}`,
}

export default config
