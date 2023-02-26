import { useEffect } from 'react'
import MainLayout from '../../components/layouts/MainLayout'
import { useFetchData } from '../../hooks/fetchData'
import bookingService from '../../services/bookingService'
const getAllBookings = bookingService.getAllBookings
import { IBooking } from '../../types/Bookings'
import Card from '../../components/global/Card/Card'
import { Link } from 'react-router-dom'

const BookingsPage = () => {
  const { data, getData } = useFetchData(getAllBookings)

  useEffect(() => {
    getData()
  }, [])
  return (
    <MainLayout>
      <div>
      <ul>
        {data && data.length && data.map((booking: IBooking, index: number) => (
          <Link key={`booking-${index}`} to={`/view-booking/${booking._id}`}>
            <Card cardTitle={booking.clientName}
              width="w-3/12"
            >
              <li>{booking.description}</li>
            </Card>
          </Link>
        ))}
      </ul>
    </div>
    </MainLayout>
  )
}

export default BookingsPage