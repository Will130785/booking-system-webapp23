import { createBrowserRouter } from 'react-router-dom'
import RegisterPage from '../pages/Register/RegisterPage'
import DashboardPage from '../pages/Dashboard/DashboardPage'
import AddBookingPage from '../pages/AddBookingPage/AddBookingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/add-booking',
    element: <AddBookingPage />
  }
])

export default router
