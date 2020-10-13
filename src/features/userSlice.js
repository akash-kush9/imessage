import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    authuser: null,
  },
  reducers: {
    login: (state,action) => {
      state.authuser = action.payload
    },
    logout: (state,action) => {
      state.authuser = null
    },
  },
});

export const { logout,login } = userSlice.actions;

export const selectUser = state => state.user.authuser;

export default userSlice.reducer;