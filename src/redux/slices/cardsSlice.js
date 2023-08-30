import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: 'cardsData',
  initialState: {},

  reducers: {
    filterByPlatformCardsData: (state, {  payload }) => {
      state.cards = payload;
    },

    resetFilterCardsData: state => {
      state.cards = null
    }
  }
});


export const { filterByPlatformCardsData } = cardsSlice.actions;

export const selectCardsData = state => {
  return state.cards
};

export default cardsSlice.reducer
