import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import navigationSlice from '../components/navigation/navigationSlice'
import bookingSlice from './bookingSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    navigation: navigationSlice.reducer,
    bookings: bookingSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
