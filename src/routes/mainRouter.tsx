import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/Login/LoginPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

export default router