import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './slices/cardsSlice'

export default configureStore({
    reducer: {
        cards: cardsReducer,
    },
    devTools: true,
})
