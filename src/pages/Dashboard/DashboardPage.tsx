import { useEffect } from 'react'
import MainLayout from '../../components/layouts/MainLayout'
import { useFetchData } from '../../hooks/fetchData'
import bookingService from '../../services/bookingService'
const getAllBookings = bookingService.getAllBookings
import BookingTile from './components/BookingTile'

const DashboardPage = () => {
  const { getData} = useFetchData(getAllBookings)
  
  useEffect(() => {
    getData()
  }, [])
  return (
    <MainLayout>
      <div>
        <BookingTile />
      </div>
    </MainLayout>
  )
}

export default DashboardPage