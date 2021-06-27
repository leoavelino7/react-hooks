import React, { useState, useCallback } from "react"

import FormContext from '../contexts/FormContext'

type FormProps = {
  children: React.ReactNode
}

type Input = {
  name: string
  ref: HTMLInputElement
}

export function Form({children}: FormProps) {
  const [, setInputs] = useState<Input[]>([])

  const registerField = useCallback((name: string, ref: HTMLInputElement) => {
    setInputs( oldInputs => [
      ...oldInputs,
      {
        name,
        ref
      }
    ])
  }, [])

  return (
    <form>
      <FormContext.Provider value={{ registerField }}>
        {children}
      </FormContext.Provider>
    </form>
  )
}