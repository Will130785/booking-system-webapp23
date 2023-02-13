import { createBrowserRouter } from 'react-router-dom'
import RegisterPage from '../pages/Register/RegisterPage'
import DashboardPage from '../pages/Dashboard/DashboardPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
])

export default router
