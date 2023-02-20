import bookingService from '../../services/bookingService'
const addBooking = bookingService.addBooking
import { IResponseError } from '../../types/Errors'
import { IAddBookingFormFields } from './types'

export const handleAddBooking = async (fields: IAddBookingFormFields, token?: string) => {
  console.log('TEST')
  try {
    const res = await addBooking(fields)
    if (res && res.data) {
      console.log('successfully added new user')
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