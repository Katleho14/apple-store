import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  street: '',
  city: '',
  state: '',
  country: '',
  saveAsDefault: false,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      return { ...state, ...action.payload };
    },
    toggleSaveAsDefault: (state) => {
      state.saveAsDefault = !state.saveAsDefault;
    },
  },
});

export const { setAddress, toggleSaveAsDefault } = addressSlice.actions;
export default addressSlice.reducer;
