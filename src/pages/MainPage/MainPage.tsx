import React, { useState, useEffect } from 'react'
import './MainPage.css'
import { Typography } from 'antd'
import { Row } from 'antd'
import { renderCards } from '../../utils/renderCards'
import { ICard } from '../../interfaces'
import { MainFilters } from '../../components/MainFilters/'

export const MainPage = () => {
    const [cardsData, setCardsData] = useState<ICard[]>([])

    useEffect(() => {
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

        fetch(url, options)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setCardsData(response)
            })
    }, [])

    return (
        <div className="main-container">
            <Typography.Title>Free-To-Play Games </Typography.Title>
            <MainFilters />
            <Row
                className="main-container__cards-box"
                justify="space-evenly"
                gutter={16}
            >
                {renderCards(cardsData)}
            </Row>
        </div>
    )
}