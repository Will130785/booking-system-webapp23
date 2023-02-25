import { useEffect } from 'react'
import MainLayout from '../../components/layouts/MainLayout'
import DashboardMain from './components/DashboardMain'
import { useFetchData } from '../../hooks/fetchData'
import bookingService from '../../services/bookingService'
const getAllBookings = bookingService.getAllBookings

const DashboardPage = () => {
  const [data, setData, error, setError, getData, setId, id] = useFetchData(getAllBookings)
  
  useEffect(() => {
    getData()
  }, [])
  return (
    <MainLayout>
      <DashboardMain />
    </MainLayout>
  )
}

export default DashboardPage