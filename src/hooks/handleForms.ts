import { useState } from 'react'
import { handleSubmitCallbackType, validationType } from './types'

export const useFormFields = (initialState: {}, handleSubmitCallback: handleSubmitCallbackType) => {
  const [fields, setValues] = useState(initialState)
  const [response, setResponse] = useState<{} | null>(null)
  const [errors, setErrors] = useState<{} | null>(initialState)
  const [bookingId, setBookingId] = useState<string>()

  const handleSubmit = async () => {
    if (!errors) {
      const res = await handleSubmitCallback(fields, bookingId as string)
      if (res) {
        setResponse(res)
      }
    } else {
      setResponse({ success: false, data: { message: 'Please complete all required fields' } })
    }
  }
  
  const setFormValues = (event: { target: { id: string, value: string } }) => {
    setValues({ ...fields, [event.target.id]: event.target.value })
  }

  const setInitialFormValues = (initialValues: {}) => {
    setValues(initialValues)
  }

  const setFormErrors = (validation: validationType) => {
    const errorObj = validation()

    if (Object.keys(errorObj).length) {
      setErrors(errorObj)
    } else {
      setErrors(null)
    }
  }

  return { fields, setFormValues, handleSubmit, response, setFormErrors, errors, setBookingId, bookingId, setInitialFormValues }
}