import {
  SanityType_artistText,
  SanityType_conversation,
  SanityType_interview,
} from '@src/sanity-types'
import { SanityKeyedReference } from 'sanity-codegen/types'
import BasicThumbnail from '../BasicThumbnail'
import TextAndPortraitThumbnail from '../TextAndPortraitThumbnail'

type ComponentTypes =
  | SanityType_interview
  | SanityType_artistText
  | SanityType_conversation

type Props = {
  cmp: {
    document: ComponentTypes | SanityKeyedReference<SanityType_interview>
    thumbnailLabel: string
  }
}

export default function SliceMachine({ cmp }: Props) {
  switch (cmp.document._type) {
    case 'interview': {
      return (
        <TextAndPortraitThumbnail
          label={cmp.thumbnailLabel}
          title={cmp.document.title ?? ''}
          text={cmp.document.thumbnailText ?? ''}
          portrait={{
            alt: cmp.document.thumbnailImage?.alt ?? '',
            caption: cmp.document.thumbnailImage?.caption ?? '',
            // @ts-ignore
            url: cmp.document.thumbnailImage?.url ?? '',
          }}
          url={cmp.document.slug?.current ?? ''}
        />
      )
    }
    case 'artistText': {
      return (
        <BasicThumbnail
          label={cmp.thumbnailLabel ?? ''}
          title={cmp.document.title ?? ''}
          image={{
            alt: cmp.document.thumbnailImage?.alt ?? '',
            caption: cmp.document.thumbnailImage?.caption ?? '',
            // @ts-ignore
            url: cmp.document.thumbnailImage?.url ?? '',
          }}
          url={cmp.document.slug?.current ?? ''}
        />
      )
    }
    default:
      return <p>{`Missing cmp for ${cmp.document._type}`}</p>
  }
}
