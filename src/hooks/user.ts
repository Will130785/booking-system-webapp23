import { useAppDispatch } from '../store/hooks'
import { clearAuthStateAction } from '../store/authSlice'
import { clearBookingStateAction } from '../store/bookingSlice'
import { clearNavStateAction } from '../components/navigation/navigationSlice'
import { useNavigate } from 'react-router-dom'
import { useAlert } from '../components/global/Alerts/hooks/handleAlerts'

export const useUserActions = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { handleAlert } = useAlert()
  const logoutUser = () => {
    // clear store
    dispatch(clearAuthStateAction())
    dispatch(clearBookingStateAction())
    dispatch(clearNavStateAction())
    // clear local storage
    localStorage.clear()
    // trigger logout alert
    handleAlert(true, 'success', 'You have successfully logged out', '5000')
    // navigate to /
    navigate('/')
  } 

  return { logoutUser }
}