import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface UserState {
  userData: any
}

const initialState: UserState = {
  userData: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.userData = action.payload
    },
    logoutUser: (state) => {
      state.userData = null
    }
  }
})

export const {setUser, logoutUser} = userSlice.actions

export default userSlice.reducer