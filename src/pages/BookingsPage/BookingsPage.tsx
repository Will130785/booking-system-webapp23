import { useEffect } from 'react'
import MainLayout from '../../components/layouts/MainLayout'
import BookingsPageMain from './components/BookingsPageMain'
import { useFetchData } from '../../hooks/fetchData'
import bookingService from '../../services/bookingService'
const getAllBookings = bookingService.getAllBookings

const BookingsPage = () => {
  const [data, setData, error, setError, getData] = useFetchData(getAllBookings)

  useEffect(() => {
    getData()
  }, [])
  return (
    <MainLayout>
      <BookingsPageMain bookings={data} />
    </MainLayout>
  )
}

export default BookingsPage