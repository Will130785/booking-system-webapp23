import { useState } from 'react'
import { handleSubmitCallbackType, validationType, ISubmitResponse } from './types'
import { useAlert } from '../components/global/Alerts/hooks/handleAlerts'
import { useNavigate } from 'react-router-dom'

export const useFormFields = (initialState: {}, handleSubmitCallback: handleSubmitCallbackType) => {
  const [fields, setValues] = useState(initialState)
  const [response, setResponse] = useState<{} | null>(null)
  const [errors, setErrors] = useState<{} | null>(initialState)
  const [bookingId, setBookingId] = useState<string>()
  const { handleAlert } = useAlert()
  const navigate = useNavigate()

  const handleSubmit = async () => {
    if (!errors) {
      const res: ISubmitResponse = await handleSubmitCallback(fields, bookingId as string) as ISubmitResponse
      if (res) {
        // Set response
        setResponse(res)
        // Set alert text
        handleAlert(true, res.success ? 'success' : 'error', res.data.message, '5000')
        // Redirect user
        navigate(res.navigateTo)
      }
    } else {
      setResponse({ success: false, data: { message: 'Please complete all required fields' } })
      handleAlert(true, 'error', 'Please complete all required fields', '5000')
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