import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
 sendMessageisOpen:false,
 selectMail:null,
};


export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    handleSendMessage: (state) => {
      state.sendMessageisOpen=!state.sendMessageisOpen
    },
    handleselectMail: (state,action) => {
      state.selectMail=action.payload
    },
  },
});

export const { handleSendMessage,handleselectMail } = mailSlice.actions;


export const selectsendMessageisOpen = (state) => state.mail.sendMessageisOpen;
export const selectopenMail = (state) => state.mail.selectMail;


export default mailSlice.reducer;
