import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
  sideBarOpen: false
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setSideBarOpen: (state) => {
      if (state.sideBarOpen) {
        state.sideBarOpen = false
      } else {
        state.sideBarOpen = true
      }
    }
  }
})

export const { setSideBarOpen } = navigationSlice.actions
export default navigationSlice