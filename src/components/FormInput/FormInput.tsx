import { formLabels, Inputs, regexValidators } from '@src/formConfig'
import { Path, UseFormRegister } from 'react-hook-form'

type Props = {
  name: Path<Inputs>
  register: UseFormRegister<Inputs>
  required?: boolean
  error?: React.ReactElement
}

export default function FormInput({ name, register, required, error }: Props) {
  return (
    <div className="grid my-3">
      <label>{formLabels[name]}</label>
      <input
        className="px-4 py-2 border rounded"
        {...register(name, { required, pattern: regexValidators[name] })}
      />
      <span className="pt-1">{error}</span>
    </div>
  )
}
