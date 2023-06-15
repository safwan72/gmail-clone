import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
 user:null,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logout: (state) => {
      state.user=null
    },
    login: (state,action) => {
      state.user=action.payload
    },
  },
});

export const { logout,login } = userSlice.actions;


export const selectuser = (state) => state.mail.user;



export default userSlice.reducer;
