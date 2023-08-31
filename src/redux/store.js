import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './slices/cardsSlice'
import gameReducer from './slices/gameSlice'
import errorReducer from './slices/errorSlice'

export default configureStore({
    reducer: {
        cards: cardsReducer,
        game: gameReducer,
        error: errorReducer,
    },
    devTools: true,
})
