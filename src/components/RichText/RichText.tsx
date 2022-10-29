import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { SanityBlock } from 'sanity-codegen/types'
import { Text } from '@src/components'
import { GraebenbachMonoRegular } from '@src/pages/_app'
import cn from 'classnames'

type Props = {
  text: SanityBlock[]
}

const components: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href}>
        <Text
          as="span"
          className={cn('text-blue', GraebenbachMonoRegular.className)}
        >
          {children}
        </Text>
      </a>
    ),
  },
  block: ({ children }) => {
    return (
      <Text className="mb-5" variant="small">
        {children}
      </Text>
    )
  },
}

export default function RichText({ text }: Props) {
  return <PortableText value={text} components={components} />
}
