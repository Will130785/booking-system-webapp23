import { useEffect } from 'react'
import { IViewBookingProps } from '../types'
import { Link, useParams } from 'react-router-dom'
import { useDeleteData } from '../../../hooks/deleteData'
import bookingService from '../../../services/bookingService'
const deleteBooking = bookingService.deleteBooking

const ViewBookingPageMain: React.FC<IViewBookingProps> = ({ booking }) => {
  const [bookingId, setBookingId, deleteItem] = useDeleteData(deleteBooking, 'booking')
  const { id } = useParams()
  
  useEffect(() => {
    setBookingId(id)
  }, [])
  return (
    <div>
      <p>{booking && booking.clientName}</p>
      <p>{booking&& booking.description}</p>
      <p>{booking && booking.worker}</p>
      <Link to={`/edit-booking/${id}`}>Edit Booking</Link>
      <button onClick={deleteItem}>Delete Booking</button>
    </div>
  )
}

export default ViewBookingPageMain