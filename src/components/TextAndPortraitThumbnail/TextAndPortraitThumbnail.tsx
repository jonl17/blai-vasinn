import { ImageType } from '@src/types'
import { Text } from '@src/components'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useResizableTabs } from '@src/store/resizable-tabs'

type Props = {
  label: string
  title: string
  text: string
  portrait: ImageType
  url: string
}

export default function TextAndPortraitThumbnail({
  label,
  title,
  text,
  portrait,
  url,
}: Props) {
  const { contentTabWidth } = useResizableTabs()

  const initialTabWidth = 880

  const sizeRatio = contentTabWidth / initialTabWidth

  return (
    <section className="flex gap-7 place-content-center hover:text-blue">
      <div className="text-center">
        <div className="max-w-xl mx-auto">
          <Text
            style={{
              fontSize: `${18 * sizeRatio}px`,
              lineHeight: `${20.5 * sizeRatio}px`,
            }}
            className="mb-3 uppercase"
            variant="small"
          >{`${label}:`}</Text>
          <Text
            style={{
              fontSize: `${50 * sizeRatio}px`,
              lineHeight: `${52 * sizeRatio}px`,
            }}
            className="mb-3"
            variant="large"
            as="h2"
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: `${29 * sizeRatio}px`,
              lineHeight: `${32 * sizeRatio}px`,
            }}
            variant="medium"
          >
            {text}
          </Text>
          {JSON.stringify(contentTabWidth / initialTabWidth)}
        </div>
      </div>
      <div
        style={{
          height: `${300 * sizeRatio}px`,
        }}
        className="aspect-[10/13] min-w-[150px] relative rounded-[50%] overflow-hidden mt-5"
      >
        <Image
          className="object-cover grayscale w-full h-full"
          fill
          src={portrait.url}
          alt={portrait.alt ?? ''}
        />
      </div>
    </section>
  )
}
