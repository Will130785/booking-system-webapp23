import { IBookingsPageProps } from '../types'
import Card from '../../../components/global/Card/Card'
import { Link } from 'react-router-dom'

const BookingsPageMain: React.FC<IBookingsPageProps> = ({ bookings }) => {
  return (
    <div>
      <ul>
        {bookings && bookings.length && bookings.map((booking, index) => (
          <Link key={`booking-${index}`} to={`/view-booking/${booking._id}`}>
            <Card cardTitle={booking.clientName}>
              <li>{booking.description}</li>
            </Card>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default BookingsPageMain