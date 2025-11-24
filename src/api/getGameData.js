import { setGameData } from '../redux/slices/gameSlice'
import { setErrorData } from '../redux/slices/errorSlice'
import axios from 'axios'


const getGameData = async (id, dispatch) => {
    const dataGame = JSON.parse(localStorage.getItem(`${id}`))
    const now = new Date()

    const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: { id },
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_ACCESS_KEY,
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        },
    }
    
    if (!dataGame) {
        try {
            const response = await axios.request(options)
            localStorage.setItem(
                `${id}`,
                JSON.stringify({
                    expiry: new Date().getTime() + 300000,
                    value: response.data,
                })
            )
            dispatch(setGameData(response.data))
        } catch (e) {
            dispatch(setErrorData(e))
        }
    }


    if (dataGame && now.getTime() > dataGame.expiry) {
        try {
            const response = await axios.request(options)
            localStorage.setItem(
                `${id}`,
                JSON.stringify({
                    expiry: new Date().getTime() + 300000,
                    value: response.data,
                })
            )
            dispatch(setGameData(response.data))
        } catch (e) {
            dispatch(setErrorData(e));
        }
    }
    if(dataGame) {
        const gameData = dataGame.value
        dispatch(setGameData(gameData))
    }
}

export default getGameData
