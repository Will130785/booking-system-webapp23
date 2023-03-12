import { AxiosResponse } from 'axios'
import mainHttpInstance from './httpMain'

class BookingService {
  addBooking (data: {}): Promise<AxiosResponse> {
    return mainHttpInstance.post('/add-booking', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : ''}`,
          User: localStorage.getItem('user')
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
  editBooking (data: {}, id: string): Promise<AxiosResponse> {
    return mainHttpInstance.put(`/edit-booking/${id}`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : ''}`
        }
      })
  }
  deleteBooking (id: string): Promise<AxiosResponse> {
    return mainHttpInstance.delete(`/delete-booking/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : ''}`
        },
        data: {
          id: id
        }
      })
  } 
}

export default new BookingService()