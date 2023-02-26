import { useState } from 'react'
import { setBookings } from '../store/bookingSlice'
import { useAppDispatch } from '../store/hooks'
import { fetchDataType, fetchDataItemType } from './types'


export const useFetchData = (dataHandler?: fetchDataType, dataItemHandler?: fetchDataItemType) => {
  const [data, setData] = useState<any>()
  const [dataItem, setDataItem] = useState<{}>()
  const [error, setError] = useState<{} | unknown>()
  const [id, setId] = useState<string>()
  const dispatch = useAppDispatch()

  const getData = async () => {
    try {
      if (dataHandler) {
        let res = await dataHandler()
      if (res && res.data) {
        setData(res.data)
        if (!id) {
          dispatch(setBookings(res.data))
        }
      } else {
        setError('No data returned')
      }
      }
    } catch (err) {
      setError(err)
    }
  }

  const getDataItem = async () => {
    try {
      if (dataItemHandler) {
        let res = await dataItemHandler(id as string)
      if (res && res.data) {
        setDataItem(res.data)
        if (!id) {
          dispatch(setBookings(res.data))
        }
      } else {
        setError('No data returned')
      }
      }
    } catch (err) {
      setError(err)
    }
  }

  return { data, setData, error, setError, getData, setId, id, dataItem, setDataItem, getDataItem }
}