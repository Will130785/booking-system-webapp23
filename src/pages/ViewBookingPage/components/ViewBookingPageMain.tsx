import { IViewBookingProps } from '../types'
import { Link, useParams } from 'react-router-dom'

const ViewBookingPageMain: React.FC<IViewBookingProps> = ({ booking }) => {
  const { id } = useParams()
  console.log(id, 'From URL')
  return (
    <div>
      <p>{booking && booking.clientName}</p>
      <p>{booking&& booking.description}</p>
      <p>{booking && booking.worker}</p>
      <Link to={`/edit-booking/${id}`}>Edit Booking</Link>
    </div>
  )
}

export default ViewBookingPageMain