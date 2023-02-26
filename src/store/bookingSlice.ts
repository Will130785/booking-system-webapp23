import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookings: []
}

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings: (state, action) => {
      state.bookings = action.payload
    },
    clearBookingStateAction: (state) => {
      state.bookings = []
    }
  }
})

export const { setBookings, clearBookingStateAction } = bookingSlice.actions
export default bookingSlice