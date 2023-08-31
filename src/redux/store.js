import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './slices/cardsSlice'
import gameReducer from './slices/gameSlice'

export default configureStore({
    reducer: {
        cards: cardsReducer,
        game: gameReducer,
    },
    devTools: true,
})
