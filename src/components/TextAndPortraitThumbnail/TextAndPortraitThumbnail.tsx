import { ImageType } from '@src/types'
import { Text } from '@src/components'
import Image from 'next/image'
import { useState } from 'react'
import { useResizableTabs, useSizeRatio } from '@src/store/resizable-tabs'
import cn from 'classnames'

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
  const sizeRatio = useSizeRatio()

  const [active, setActive] = useState(false)

  return (
    <section className="flex gap-7 place-content-center">
      <div
        className="text-center hover:text-blue"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <div className="max-w-2xl mx-auto">
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
        </div>
      </div>
      <div
        style={{
          width: `${250 * sizeRatio}px`,
        }}
        className={cn(
          'aspect-[3/4] min-w-[150px] h-[25%] relative rounded-[50%] overflow-hidden mt-5',
          {
            'bg-blue': active,
          }
        )}
      >
        <Image
          className={cn('object-cover w-full h-full', {
            'mix-blend-lighten': active,
          })}
          fill
          src={portrait.url + '?sat=-100'}
          alt={portrait.alt ?? ''}
        />
      </div>
    </section>
  )
}
