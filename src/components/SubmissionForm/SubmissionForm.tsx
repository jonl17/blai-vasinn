import FormInput from '@src/components/FormInput'
import FormInputError from '@src/components/FormInputError'
import type { Inputs } from '@src/formConfig'
import { SubmitHandler, useForm } from 'react-hook-form'

// Grunnupplýsingar fyrir sendanda:
// -nafn
// -sími
// -tölvupóstfang
// Og um gagnið:
// -uppruni gagns (hvar birtist það fyrst/hvaðan kemur það)
// -ártal

// the person sending the document

export default function SubmissionForm() {
  const { register, handleSubmit, formState } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        name="name"
        register={register}
        required
        error={formState.errors['name'] && <FormInputError name="name" />}
      />
      <FormInput
        name="email"
        register={register}
        required
        error={formState.errors['email'] && <FormInputError name="email" />}
      />

      <button className="px-4 py-2 border rounded" type="submit">
        Senda inn
      </button>
    </form>
  )
}
