import { createSlice } from '@reduxjs/toolkit'

const initialState: { token: string | null, user: {} } = {
  token: '',
  user: {}
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
      state.user = action.payload.user
    },
    clearAuthStateAction: (state) => {
      state.token = ''
      state.user = {}
    }
  }
})
export const { loginUserAction, initAuth, clearAuthStateAction } = authSlice.actions
export default authSlice