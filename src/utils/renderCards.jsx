import React from 'react'
import { GameCard } from '../components/GameCard'

export const renderCards = (cardsData, limit) => {
    const cards = cardsData.slice(0, limit).map(
        (
            { id, thumbnail, genre, release_date, title, developer },
            index
        ) => {
            const cardInfo = {
                id,
                thumbnail,
                genre,
                release_date,
                title,
                developer,
            }
            return (
                <div key={index}>
                    <GameCard cardInfo={cardInfo} />
                </div>
            )
        }
    )
    return cards
}
