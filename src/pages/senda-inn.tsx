import { SimpleLayout, SubmissionForm, Text } from '@src/components'
import { ReactElement } from 'react'
import { NextPageWithLayout } from './_app'

const SubmitDocumentPage: NextPageWithLayout = () => {
  return (
    <div className="px-4">
      <Text className="py-12" as="h1" variant="dynamicLarge">
        Sendu inn gagn
      </Text>
      <section className="max-w-lg">
        <SubmissionForm />
      </section>
    </div>
  )
}

SubmitDocumentPage.getLayout = function getLayout(page: ReactElement) {
  return <SimpleLayout>{page}</SimpleLayout>
}

export default SubmitDocumentPage
