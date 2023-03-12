import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/mainRouter'
import authRouter from './routes/authRouter'
import { useAppSelector, useAppDispatch } from './store/hooks'
import { initAuth } from './store/authSlice'
import StandardAlert from './components/global/Alerts/StandardAlert/StandardAlert'

function App() {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.token)

  useEffect(() => {
    dispatch(initAuth())
  }, [])

  return <>
    <StandardAlert />
    <RouterProvider router={token ? router : authRouter} />
  </>
}

export default App
