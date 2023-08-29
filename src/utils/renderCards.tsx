import React from 'react'
import { GameCard } from '../components/GameCard'
import { ICard } from '../interfaces'

export const renderCards = (cardsData: ICard[]) => {
    const cards = cardsData.map(
        (
            { id, thumbnail, genre, release_date, title, developer }: ICard,
            index: number
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
