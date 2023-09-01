import { setErrorData } from '../redux/slices/errorSlice'
import { setCardsData } from '../redux/slices/cardsSlice'
import axios from 'axios'

export const getCardsData = async (dispatch, filters) => {
    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: { ...filters },
        headers: {
            'X-RapidAPI-Key':
                // eslint-disable-next-line no-undef
                process.env.REACT_APP_ACCESS_KEY,
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
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
