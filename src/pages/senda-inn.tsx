import { SubmissionForm, Text } from '@src/components'

// Grunnupplýsingar fyrir sendanda:
// -nafn
// -sími
// -tölvupóstfang
// Og um gagnið:
// -uppruni gagns (hvar birtist það fyrst/hvaðan kemur það)
// -ártal

export default function SubmitDocumentPage() {
  return (
    <div className="px-4">
      <Text className="pt-12" as="h1" variant="dynamicLarge">
        Sendu inn gögn
      </Text>
      <SubmissionForm />
    </div>
  )
}
