import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteHandlerType } from './types'
import { useAlert } from '../components/global/Alerts/hooks/handleAlerts'

export const useDeleteData = (deleteHandler: deleteHandlerType, area: string) => {
  const [bookingId, setBookingId] = useState<string>()
  const navigate = useNavigate()
  const [error, setError] = useState<{} | unknown>()
  const { handleAlert } = useAlert()

  const deleteItem = async () => {
    try {
      const res = await deleteHandler(bookingId as string)
      console.log(res)
      if (res && res.status === 200) {
        if (area === 'booking') {
          handleAlert(true, 'success', 'Successfully deleted booking', '5000')
          navigate('/all-bookings')
        }
      }
    } catch (err) {
      setError(err)
    }
  }

  return { bookingId, setBookingId, deleteItem, error, setError }
}