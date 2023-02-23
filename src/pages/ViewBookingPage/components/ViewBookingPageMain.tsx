import { IViewBookingProps } from '../types'

const ViewBookingPageMain: React.FC<IViewBookingProps> = ({ booking }) => {
  return (
    <div>
      <p>{booking && booking.clientName}</p>
      <p>{booking&& booking.description}</p>
      <p>{booking && booking.worker}</p>
    </div>
  )
}

export default ViewBookingPageMain