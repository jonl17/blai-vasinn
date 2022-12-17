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
            <span className="text-blue text-29/32 font-graebenbachMonoRegular">
              {children}
            </span>
          </a>
        ),
        paragraph: ({ children }) => (
          <Text className="mb-5" variant="small">
            {children}
          </Text>
        ),
      }}
    />
  )
}
