import React, { useState } from 'react'

export const useFormFields = (initialState: any) => {
  const [fields, setValues] = useState(initialState)
  
  const setFormValues = (event: any) => {
    setValues({ ...fields, [event.target.id]: event.target.value })
  }

  return [fields, setFormValues]
}