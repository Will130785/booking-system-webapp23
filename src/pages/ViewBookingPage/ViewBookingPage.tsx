import { useEffect } from 'react'
import MainLayout from '../../components/layouts/MainLayout'
import ViewBookingPageMain from './components/ViewBookingPageMain'
import { useFetchData } from '../../hooks/fetchData'
import { useParams } from 'react-router-dom'
import bookingService from '../../services/bookingService'
const getBooking = bookingService.getBooking

const ViewBookingPage = () => {
  const [data, setData, error, setError, getData, setId, id] = useFetchData(getBooking)
  const params = useParams()
  
  useEffect(() => {
    console.log(params.id, 'PARAMS')
    setId(params.id)
  }, [])
  useEffect(() => {
    console.log(id)
    getData()
  }, [id])
  return (
    <MainLayout>
      <ViewBookingPageMain />
    </MainLayout>
  )
}

export default ViewBookingPage