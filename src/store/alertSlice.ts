import { createSlice } from '@reduxjs/toolkit'

const initialState: { showAlert: boolean, type: string, duration: string, text: string } = {
  showAlert: false,
  type: '',
  duration: '',
  text: ''
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.showAlert = action.payload.showAlert
      state.type = action.payload.type
      state.duration = action.payload.duration
      state.text = action.payload.text
    }
  }
})
export const { setAlert } = alertSlice.actions
export default alertSlice