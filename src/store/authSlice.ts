import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  token: '',
  user: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initAuth: (state) => {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
      } else {
        state.token = ''
      }
    },
    loginUserAction: (state, action) => {
      state.token = action.payload.token
    }
  }
})
export const { loginUserAction, initAuth } = authSlice.actions
export default authSlice