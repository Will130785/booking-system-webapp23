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
    }
  }
})

export const { setBookings } = bookingSlice.actions
export default bookingSlice