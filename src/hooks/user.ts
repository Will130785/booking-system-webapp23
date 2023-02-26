import { useAppDispatch } from '../store/hooks'
import { clearAuthStateAction } from '../store/authSlice'
import { clearBookingStateAction } from '../store/bookingSlice'
import { clearNavStateAction } from '../components/navigation/navigationSlice'
import { useNavigate } from 'react-router-dom'

export const useUserActions = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const logoutUser = () => {
    // clear store
    dispatch(clearAuthStateAction())
    dispatch(clearBookingStateAction())
    dispatch(clearNavStateAction())
    // clear local storage
    localStorage.clear()
    // navigate to /
    navigate('/')
  } 

  return { logoutUser }
}