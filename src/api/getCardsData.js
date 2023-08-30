import { filterByPlatformCardsData } from '../redux/slices/cardsSlice'

export const getCardsData = async (dispatch) => {
    const url =
        'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc'
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':
                '5d7372b571msh53bdd7c8ffafe77p1bb5e8jsn8dad5f0a1e21',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        },
    }

    const response = await fetch(url, options).then((response) => {
        return response.json()
    })

    dispatch(
        filterByPlatformCardsData(response)
    )
}
