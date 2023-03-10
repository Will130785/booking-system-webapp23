import { useEffect } from 'react'
import Card from '../../components/global/Card/Card'
import StandardInput from '../../components/global/StandardInput/StandardInput'
import StandardButton from '../../components/global/StandardButton/StandardButton'
import { useFormFields } from '../../hooks/handleForms'
import { handleEditBooking } from './helpers'
import { IEditBookingFormFields } from './types'
import { useParams } from 'react-router-dom'
import { useFetchData } from '../../hooks/fetchData'
import bookingService from '../../services/bookingService'
const getBooking = bookingService.getBooking
import MainLayout from '../../components/layouts/MainLayout'
import { IUseFormFields } from '../../hooks/types'

const EditBookingPage = () => {
  const { dataItem, getDataItem, setId, id } = useFetchData(undefined, getBooking)
  const { fields, setFormValues, handleSubmit, response, setFormErrors, errors, setBookingId, setInitialFormValues } = useFormFields({ clientName: '', description: '', worker: '' }, handleEditBooking) as IUseFormFields
  const params = useParams()
  const idParams = params.id
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
    setBookingId(idParams)
    setId(idParams)
  }, [])
  useEffect(() => {
    if (id) {
      getDataItem()
    }
  }, [id])
  useEffect(() => {
    if (dataItem) {
      // Create new object in order to remove id
      const updatedData: { _id?: string } = {...dataItem}
      delete updatedData._id
      setInitialFormValues(updatedData)
    }
  }, [dataItem])
  return (
    <MainLayout>
      <div className='h-full w-full flex justify-center items-center'>
      <Card 
        cardTitle='Edit Booking'
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
            buttonText='Edit Booking'
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

export default EditBookingPage