import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: 'cardsData',
  initialState: {
    filters: {}
  },

  reducers: {
    setCardsData: (state, { payload }) => {
      state.cards = payload;
    },
    filterCardsData: (state, {payload: { type, value }}) => {
      if(value === '') {
        delete state.filters[type]
        return;
      }

      state.filters[type] = value
    },
    resetFilterCardsData: state => {
      state.cards = null
    }
  }
});


export const { setCardsData, filterCardsData } = cardsSlice.actions;

export const selectCardsData = state => {
  return state.cards
};

export default cardsSlice.reducer
