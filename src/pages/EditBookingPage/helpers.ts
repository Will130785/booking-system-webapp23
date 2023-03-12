import bookingService from '../../services/bookingService'
const editBooking = bookingService.editBooking
import { IResponseError } from '../../types/Errors'
import { IEditBookingFormFields } from './types'

export const handleEditBooking = async (fields: IEditBookingFormFields, id: string) => {
  try {
    const res = await editBooking(fields, id)
    if (res && res.data) {
      return {
        success: true,
        data: res.data,
        navigateTo: `/view-booking/${id}`
      }
    }
  } catch (err) {
    const error: IResponseError = err as IResponseError
    return {
      success: false,
      data: error.response.data
    }
  }
}