import React, { useState } from "react"

import FormContext from '../contexts/FormContext'

type FormProps = {
  children: React.ReactNode
}

type Input = {
  name: string
  ref: HTMLInputElement
}

export function Form({children}: FormProps) {
  const [inputs, setInputs] = useState<Input[]>([])

  function registerField(name: string, ref: HTMLInputElement) {
    setInputs([
      ...inputs,
      {
        name,
        ref
      }
    ])
  }

  return (
    <form>
      <FormContext.Provider value={{ registerField }}>
        {children}
      </FormContext.Provider>
    </form>
  )
}