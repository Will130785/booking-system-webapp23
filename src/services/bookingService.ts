import { AxiosResponse } from 'axios'
import mainHttpInstance from './httpMain'

class BookingService {
  addBooking (data: any): Promise<AxiosResponse> {
    return mainHttpInstance.post('/add-booking', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') ? localStorage.getItem('token') : ''}`
        }
      },)
  }
}

export default new BookingService()