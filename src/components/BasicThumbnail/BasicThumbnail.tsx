import { useSizeRatio } from '@src/store/resizable-tabs'
import { ImageType } from '@src/types'
import cn from 'classnames'
import Image from 'next/image'
import { useState } from 'react'
import Text from '../Text'

type Props = {
  label: string
  title: string
  image: ImageType
  url: string
  variant?: 'wide' | 'thin'
}

export default function BasicThumbnail({
  label,
  title,
  image,
  variant = 'wide',
}: Props) {
  const sizeRatio = useSizeRatio()
  const [active, setActive] = useState(false)

  return (
    <section
      className={cn('mt-10 w-full ', {
        'w-2/3': variant === 'wide',
        'w-1/3': variant === 'thin',
      })}
    >
      <div
        className="text-center hover:text-blue"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
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
            fontSize: `${29 * sizeRatio}px`,
            lineHeight: `${32 * sizeRatio}px`,
          }}
          className="mb-3 uppercase"
          variant="large"
          as="h3"
        >
          {title}
        </Text>
        <div className="relative">
          <Image
            className={cn('h-full w-full object-cover', {
              'blue-image-filter': active,
            })}
            src={image.url + '?sat=-100'}
            height={500}
            width={500}
            alt={image.alt ?? ''}
          />
        </div>
      </div>
    </section>
  )
}
