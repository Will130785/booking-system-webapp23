import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import navigationSlice from '../components/navigation/navigationSlice'
import bookingSlice from './bookingSlice'
import alertSlice from './alertSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    navigation: navigationSlice.reducer,
    bookings: bookingSlice.reducer,
    alerts: alertSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
