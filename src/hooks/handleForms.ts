import { useState } from 'react'

export const useFormFields = (initialState?: any, handleSubmitCallback?: any) => {
  const [fields, setValues] = useState(initialState)
  const [response, setResponse] = useState<any>(null)
  const [errors, setErrors] = useState<any>(initialState)

  const handleSubmit = async (event: any) => {
    if (!errors) {
      const res = await handleSubmitCallback(fields)
      setResponse(res)
    } else {
      setResponse({ success: false, data: 'Please complete all required fields' })
    }
  }
  
  const setFormValues = (event: any) => {
    setValues({ ...fields, [event.target.id]: event.target.value })
  }

  const setFormErrors = (validation: any) => {
    const errorObj = validation()

    if (Object.keys(errorObj).length) {
      setErrors(errorObj)
    } else {
      setErrors(null)
    }
  }

  return [fields, setFormValues, handleSubmit, response, setFormErrors, errors]
}