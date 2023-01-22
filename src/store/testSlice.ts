import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: true
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    updateIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn
    }
  }
})

export default testSlice