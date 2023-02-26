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
  // validate phone number of this format 123-4567
  telephone: /^\d{3}-\d{4}$/,
}

export const errorMessages: OptionalFormObject<string> = {
  name: 'Það vantar nafn',
  email: 'Það vantar netfang',
  telephone: 'Það vantar símanúmer',
}
