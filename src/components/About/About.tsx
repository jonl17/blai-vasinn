import RichText from '../RichText'
import { Text } from '@src/components'

export default function About() {
  return (
    <section className="text-center">
      <Text className="mb-2" as="h1" variant="large">
        um:
      </Text>
      {/* <RichText text={about?.text ?? []} /> */}
    </section>
  )
}
