import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: 'errorMessage',
  initialState: {},

  reducers: {
    setErrorData: (state, { payload }) => {
      state.error = payload;
    }
  }
})

export const { setErrorData } = errorSlice.actions;

export const selectErrorData = state => {
  return state.error.error
};

export default errorSlice.reducer
