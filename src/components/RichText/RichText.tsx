import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import { Text } from '@src/components'
import cn from 'classnames'

type Props = {
  text: any
}

const components: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ value, children }) => (
      <a href={value?.href}>
        <Text as="span" className={cn('text-blue font-graebenbachMonoRegular')}>
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
