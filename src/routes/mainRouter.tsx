import { createBrowserRouter } from 'react-router-dom'
import RegisterPage from '../pages/Register/RegisterPage'
import DashboardPage from '../pages/Dashboard/DashboardPage'
import AddBookingPage from '../pages/AddBookingPage/AddBookingPage'
import BookingsPage from '../pages/BookingsPage/BookingsPage'
import ViewBookingPage from '../pages/ViewBookingPage/ViewBookingPage'
import EditBookingPage from '../pages/EditBookingPage/EditBookingPage'

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
  },
  {
    path: '/view-booking/:id',
    element: <ViewBookingPage />
  },
  {
    path: '/edit-booking/:id',
    element: <EditBookingPage />
  }
])

export default router
