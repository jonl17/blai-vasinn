import FormInput from '@src/components/FormInput'
import FormInputError from '@src/components/FormInputError'
import type { Inputs } from '@src/formConfig'
import { SubmitHandler, useForm } from 'react-hook-form'
import Text from '../Text'

// Grunnupplýsingar fyrir sendanda:
// -nafn x
// -sími x
// -tölvupóstfang x
// Og um gagnið:
// -uppruni gagns (hvar birtist það fyrst/hvaðan kemur það)
// -ártal

// the person sending the document

export default function SubmissionForm() {
  const { register, handleSubmit, formState } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text className="py-4" variant="medium">
        Sendandi
      </Text>
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
      <FormInput
        name="telephone"
        register={register}
        required
        error={
          formState.errors['telephone'] && <FormInputError name="telephone" />
        }
        onChange={(e) => {
          // disallow numbers longer than 7 + hyphen
          if (e.target.value.length > 8) {
            e.target.value = e.target.value.slice(0, 8)
          }
          // add hyphens to phone number
          const value = e.target.value
          const hyphenated = value.replace(/(\d{3})(\d{4})/, '$1-$2')
          e.target.value = hyphenated
        }}
      />
      <Text className="py-4" variant="medium">
        Gagnið
      </Text>
      <FormInput name="origin" register={register} />
      <FormInput name="date" register={register} type="date" />
      <button className="px-4 py-2 border rounded" type="submit">
        Senda inn
      </button>
    </form>
  )
}
