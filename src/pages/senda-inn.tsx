import { SubmissionForm, Text } from '@src/components'

export default function SubmitDocumentPage() {
  return (
    <div className="px-4">
      <Text className="pt-12" as="h1" variant="dynamicLarge">
        Sendu inn gögn
      </Text>
      <section className="max-w-lg">
        <SubmissionForm />
      </section>
    </div>
  )
}
