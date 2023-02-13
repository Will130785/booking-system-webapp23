import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/mainRouter'
import LoginPage from './pages/Login/LoginPage'
import { useAppSelector, useAppDispatch } from './store/hooks'
import { initAuth } from './store/authSlice'

function App() {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.token)

  useEffect(() => {
    dispatch(initAuth())
  }, [])
  if (!token) {
    return <LoginPage />
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App
