import { setErrorData } from '../redux/slices/errorSlice'
import { setCardsData } from '../redux/slices/cardsSlice'
import axios from 'axios'

// export const getCardsData = async () => {
export const getCardsData = async (dispatch, filters) => {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: { ...filters },
        headers: {
            'x-rapidapi-key':  process.env.REACT_APP_ACCESS_KEY,
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        },
    }


    try {
        const responseData = await axios.request(options)
        const response = responseData.data
        dispatch(setCardsData(response))
    } catch (error) {
        dispatch(setErrorData(error))
    }

}
