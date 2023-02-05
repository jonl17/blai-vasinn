import { Inputs, errorMessages } from '@src/formConfig'
import { Path } from 'react-hook-form'

type Props = {
  name: Path<Inputs>
}

export default function FormInputError({ name }: Props) {
  return <span className="text-red">{errorMessages[name]}</span>
}
