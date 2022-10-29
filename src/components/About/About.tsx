import { SanityType_about } from '@src/sanity-types'
import RichText from '../RichText'
import { Text } from '@src/components'

type Props = {
  about: SanityType_about
}

export default function About({ about }: Props) {
  return (
    <section className="text-center">
      <Text className="mb-2" as="h1" variant="large">
        um:
      </Text>
      <RichText text={about.text ?? []} />
    </section>
  )
}
