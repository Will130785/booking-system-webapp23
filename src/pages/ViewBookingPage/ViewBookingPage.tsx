import { useEffect } from 'react'
import MainLayout from '../../components/layouts/MainLayout'
import { useFetchData } from '../../hooks/fetchData'
import bookingService from '../../services/bookingService'
const getBooking = bookingService.getBooking
import { Link, useParams } from 'react-router-dom'
import { useDeleteData } from '../../hooks/deleteData'
const deleteBooking = bookingService.deleteBooking
import { IUseFetchData } from '../../hooks/types'

const ViewBookingPage = () => {
  const { dataItem, getDataItem, setId, id } = useFetchData(undefined, getBooking) as IUseFetchData
  const { setBookingId, deleteItem } = useDeleteData(deleteBooking, 'booking')
  const params = useParams()
  
  useEffect(() => {
    setId(params.id as string)
    setBookingId(params.id)
  }, [])
  useEffect(() => {
    if (id) {
      getDataItem()
    }
  }, [id])
  return (
    <MainLayout>
      <div>
      <p>{dataItem && dataItem.clientName}</p>
      <p>{dataItem && dataItem.description}</p>
      <p>{dataItem && dataItem.worker}</p>
      <Link to={`/edit-booking/${id}`}>Edit Booking</Link>
      <button onClick={deleteItem}>Delete Booking</button>
    </div>
    </MainLayout>
  )
}

export default ViewBookingPage