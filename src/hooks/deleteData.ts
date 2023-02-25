import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useDeleteData = (deleteHandler: any, area: string) => {
  const [bookingId, setBookingId] = useState<any>()
  const navigate = useNavigate()

  const deleteItem = async () => {
    try {
      const res = await deleteHandler(bookingId)
      if (res && res.status === 200) {
        console.log('item deleted')
        if (area === 'booking') {
          navigate('/all-bookings')
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  return [bookingId, setBookingId, deleteItem]
}