import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteHandlerType } from './types'

export const useDeleteData = (deleteHandler: deleteHandlerType, area: string) => {
  const [bookingId, setBookingId] = useState<string>()
  const navigate = useNavigate()
  const [error, setError] = useState<{} | unknown>()

  const deleteItem = async () => {
    try {
      const res = await deleteHandler(bookingId as string)
      if (res && res.status === 200) {
        if (area === 'booking') {
          navigate('/all-bookings')
        }
      }
    } catch (err) {
      setError(err)
    }
  }

  return { bookingId, setBookingId, deleteItem, error, setError }
}