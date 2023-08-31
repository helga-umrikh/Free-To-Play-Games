import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: 'cardsData',
  initialState: {
    filters: {},
    limit: 10,
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
      state.limit = 10;
    },
    updateLimit: (state) => {
      state.limit = state.limit + 10;
    },
    resetFilterCardsData: state => {
      state.cards = null
    }
  }
});


export const { setCardsData, filterCardsData, updateLimit } = cardsSlice.actions;

export const selectCardsData = state => {
  return state.cards
};

export default cardsSlice.reducer
