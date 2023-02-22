import { AxiosResponse } from 'axios'
import mainHttpInstance from './httpMain'

class BookingService {
  addBooking (data: any): Promise<AxiosResponse> {
    return mainHttpInstance.post('/add-booking', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : ''}`
        }
      })
  }
  getAllBookings (): Promise<AxiosResponse> {
    return mainHttpInstance.get('/all-bookings', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : ''}`
      }
    })
  }

  getBooking (id: string): Promise<AxiosResponse> {
    return mainHttpInstance.get(`/view-booking/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : ''}`
      }
    })
  } 
}

export default new BookingService()