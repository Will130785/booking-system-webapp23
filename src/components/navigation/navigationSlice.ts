import { createSlice } from '@reduxjs/toolkit'

const initialState: { sideBarOpen: boolean } = {
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
    },
    clearNavStateAction: (state) => {
      state.sideBarOpen = false
    }
  }
})

export const { setSideBarOpen, clearNavStateAction } = navigationSlice.actions
export default navigationSlice