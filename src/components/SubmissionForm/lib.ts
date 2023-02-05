import { Path } from 'react-hook-form'

type Sender = {
  name: string
  telephone: string
  email: string
}

// document submission
type Submission = {
  origin: string
  date: string
}

export type Inputs = Sender & Submission

type RequiredInputs = Pick<Inputs, 'name' | 'email'>

export const regexValidators: { [key in Path<RequiredInputs>]: RegExp } = {
  name: /^[a-zA-Z]+(( [a-zA-Z]+)*)$/,
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
}

export const formLabels: { [key in Path<Inputs>]: string } = {
  name: 'Fullt nafn',
  date: 'Dagsetning',
  email: 'Netfang',
  origin: 'Uppruni',
  telephone: 'Sími',
}
