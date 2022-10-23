import { createSlice } from '@reduxjs/toolkit'

export const logSlice = createSlice({
  name: 'logged',
  initialState: {
    value: false
  },
  reducers: {
    loggedIn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true
    },
    loggedOut: (state) => {
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { loggedIn, loggedOut } = logSlice.actions

export const selectLogged = (state) => state.logged.value

export default logSlice.reducer
