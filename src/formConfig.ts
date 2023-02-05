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

type Keys = Path<Inputs>

type OptionalFormObject<T> = Partial<{ [key in Path<Inputs>]: T }>

export const formLabels: { [key in Keys]: string } = {
  name: 'Fullt nafn',
  date: 'Dagsetning',
  email: 'Netfang',
  origin: 'Uppruni',
  telephone: 'Sími',
}

export const regexValidators: OptionalFormObject<RegExp> = {
  name: /^.{2,}$/,
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,})+$/,
}

export const errorMessages: OptionalFormObject<string> = {
  name: 'Nafn ekki gilt',
  email: 'Netfang ekki gilt',
}
