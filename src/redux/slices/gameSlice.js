import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
  name: 'gameData',
  initialState: {

  },

  reducers: {
    setGameData: (state, { payload }) => {
      state.game = payload;
    }
  }
})

export const { setGameData } = gameSlice.actions;

export const selectGameData = state => {
  return state.game.game
};

export default gameSlice.reducer
