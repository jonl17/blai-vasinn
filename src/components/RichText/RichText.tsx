import { Text } from '@src/components'
import cn from 'classnames'
import { PrismicRichText } from '@prismicio/react'
import { RTNode } from '@prismicio/types'

type Props = {
  text: [RTNode]
}

export default function RichText({ text }: Props) {
  return (
    <PrismicRichText
      field={text}
      components={{
        hyperlink: ({ node, children }) => (
          <a href={node.data.url}>
            <Text
              as="span"
              className={cn('text-blue font-graebenbachMonoRegular')}
            >
              {children}
            </Text>
          </a>
        ),
        paragraph: ({ children }) => <Text variant="small">{children}</Text>,
      }}
    />
  )
}
