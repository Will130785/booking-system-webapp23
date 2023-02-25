import { useEffect, useState } from 'react'
import Card from '../../../components/global/Card/Card'
import StandardInput from '../../../components/global/StandardInput/StandardInput'
import StandardButton from '../../../components/global/StandardButton/StandardButton'
import { useFormFields } from '../../../hooks/handleForms'
import { handleEditBooking } from '../helpers'
import { IEditBookingFormFields } from '../types'
import { useParams } from 'react-router-dom'

const EditBookingMain = () => {
  const [fields, setFormValues, handleSubmit, response, setFormErrors, errors, setBookingId] = useFormFields({ clientName: '', description: '', worker: '' }, handleEditBooking)
  const { id } = useParams()
  useEffect(() => {
    setFormErrors(() => {
      const errors: IEditBookingFormFields = {}
      if (!fields.clientName) {
        errors.clientName = 'Client name required'
      }
      if (!fields.description) {
        errors.description = 'Description required'
      }
      if (!fields.worker) {
        errors.worker = 'Worker required'
      }
      return errors
    })
  }, [fields])
  useEffect(() => {
    setBookingId(id)
  }, [])
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Card 
        cardTitle='Edit Booking'
      >
        <div>
          <StandardInput 
            labelPosition='top'
            labelText='Client Name'
            inputType='text'
            inputId='clientName'
            onChange={setFormValues}
          />
          {errors && errors.clientName && <p>Client name is required</p>}
          <StandardInput 
            labelPosition='top'
            labelText='Description'
            inputType='text'
            inputId='description'
            onChange={setFormValues}
          />
          {errors && errors.description && <p>Description is required</p>}
          <StandardInput 
            labelPosition='top'
            labelText='Worker'
            inputType='text'
            inputId='worker'
            onChange={setFormValues}
          />
          {errors && errors.worker && <p>Worker is required</p>}
          <StandardButton 
            buttonText='Edit Booking'
            onClick={handleSubmit}
          />
          {response && response.data && (
            <p>{response.data.message}</p>
          )}
        </div>
      </Card>
    </div>
  )
}

export default EditBookingMain