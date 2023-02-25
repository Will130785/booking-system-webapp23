import bookingService from '../../services/bookingService'
const editBooking = bookingService.editBooking
import { IResponseError } from '../../types/Errors'
import { IEditBookingFormFields } from './types'

export const handleEditBooking = async (fields: IEditBookingFormFields, id: string) => {
  console.log('TEST')
  try {
    const res = await editBooking(fields, id)
    if (res && res.data) {
      console.log('successfully edited booking')
      return {
        success: true,
        data: res.data
      }
    }
  } catch (err) {
    const error: IResponseError = err as IResponseError
    console.log(error.response.data)
    return {
      success: false,
      data: error.response.data
    }
  }
}