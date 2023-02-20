import { createBrowserRouter } from 'react-router-dom'
import RegisterPage from '../pages/Register/RegisterPage'
import DashboardPage from '../pages/Dashboard/DashboardPage'
import AddBookingPage from '../pages/AddBookingPage/AddBookingPage'
import BookingsPage from '../pages/BookingsPage/BookingsPage'

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
  },
  {
    path: '/all-bookings',
    element: <BookingsPage />
  }
])

export default router
