import { configureStore } from '@reduxjs/toolkit'
import testSlice from './testSlice'
import authSlice from './authSlice'

export const store = configureStore({
  reducer: {
    test: testSlice.reducer,
    auth: authSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
