import { formLabels, Inputs, regexValidators } from '@src/formConfig'
import { HTMLInputTypeAttribute } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

type Props = {
  name: Path<Inputs>
  register: UseFormRegister<Inputs>
  required?: boolean
  error?: React.ReactElement
  type?: HTMLInputTypeAttribute
  onChange?: (e: any) => void
}

export default function FormInput({
  name,
  register,
  required,
  error,
  type = 'text',
  onChange,
}: Props) {
  return (
    <div className="grid my-3">
      <label>{formLabels[name]}</label>
      <input
        type={type}
        className="px-4 py-2 border rounded"
        {...register(name, {
          required,
          pattern: regexValidators[name],
          onChange,
        })}
      />
      <span className="pt-1">{error}</span>
    </div>
  )
}
