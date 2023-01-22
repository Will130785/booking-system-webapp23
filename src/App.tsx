import { RouterProvider } from 'react-router-dom'
import router from './routes/mainRouter'
import { Provider } from 'react-redux'
import { store } from './store/index'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
