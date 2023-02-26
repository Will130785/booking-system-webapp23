import { useEffect } from 'react'
import Card from '../../components/global/Card/Card'
import StandardInput from '../../components/global/StandardInput/StandardInput'
import StandardButton from '../../components/global/StandardButton/StandardButton'
import { useFormFields } from '../../hooks/handleForms'
import { handleAddBooking } from './helpers'
import { IAddBookingFormFields } from './types'
import MainLayout from '../../components/layouts/MainLayout'
import { IUseFormFields } from '../../hooks/types'

const AddBookingPage = () => {
  const { fields, setFormValues, handleSubmit, response, setFormErrors, errors } = useFormFields({ clientName: '', description: '', worker: '' }, handleAddBooking) as IUseFormFields
  useEffect(() => {
    setFormErrors(() => {
      const errors: IAddBookingFormFields = {}
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
  return (
    <MainLayout>
      <div className='h-full w-full flex justify-center items-center'>
      <Card 
        cardTitle='Add New Booking'
        width="w-3/6"
      >
        <div>
          <StandardInput 
            labelPosition='top'
            labelText='Client Name'
            inputType='text'
            inputId='clientName'
            onChange={setFormValues}
            value={fields.clientName}
          />
          {errors && errors.clientName && <p>Client name is required</p>}
          <StandardInput 
            labelPosition='top'
            labelText='Description'
            inputType='text'
            inputId='description'
            onChange={setFormValues}
            value={fields.description}
          />
          {errors && errors.description && <p>Description is required</p>}
          <StandardInput 
            labelPosition='top'
            labelText='Worker'
            inputType='text'
            inputId='worker'
            onChange={setFormValues}
            value={fields.worker}
          />
          {errors && errors.worker && <p>Worker is required</p>}
          <StandardButton 
            buttonText='Add Booking'
            onClick={handleSubmit}
          />
          {response && response.data && (
            <p>{response.data.message}</p>
          )}
        </div>
      </Card>
    </div>
    </MainLayout>
  )
}

export default AddBookingPage