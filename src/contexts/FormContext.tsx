import { createContext } from 'react'

type FormContextType = {
  registerField: (name: string, ref: HTMLInputElement) => void
}

const FormContext = createContext<FormContextType>({
  registerField: () => null
})

export default FormContext