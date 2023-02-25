import { useState } from 'react'
import { setBookings } from '../store/bookingSlice'
import { useAppDispatch } from '../store/hooks'

export const useFetchData = (dataHandler: any) => {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<any>()
  const [id, setId] = useState<any>()
  const dispatch = useAppDispatch()

  const getData = async () => {
    console.log('getting data')
    try {
        console.log(id, 'ID')
      let res = await dataHandler(id)
      if (res && res.data) {
        setData(res.data)
        dispatch(setBookings(res.data))
      } else {
        setError('No data returned')
      }
    } catch (err) {
      setError(err)
    }
  }

  return [data, setData, error, setError, getData, setId, id]
}