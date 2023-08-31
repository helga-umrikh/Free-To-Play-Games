
import { setCardsData } from '../redux/slices/cardsSlice'
import axios from 'axios'

export const getCardsData = async (dispatch, filters) => {


    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: { ...filters },
        headers: {
            'X-RapidAPI-Key':
                '5d7372b571msh53bdd7c8ffafe77p1bb5e8jsn8dad5f0a1e21',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
    }

    try {
        const responseData = await axios.request(options)
        const response = responseData.data
        dispatch(setCardsData(response))
    } catch (error) {
        throw new Error()
    }
}
