import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './MainPage.css'
import { Typography, Spin } from 'antd'
import { Row } from 'antd'
import { renderCards } from '../../utils/renderCards'
import { MainFilters } from '../../components/MainFilters'
import { selectCardsData } from '../../redux/slices/cardsSlice'
import { getCardsData } from '../../api/getCardsData'

export const MainPage = () => {
    const dispatch = useDispatch();
    const { cards: cardsData, filters } = useSelector(selectCardsData)

    useEffect(() => {
        getCardsData(dispatch, filters);
    }, [dispatch, filters])

    return (
        <div className="main-container">
            <Typography.Title>Free-To-Play Games </Typography.Title>
            <MainFilters />

            {cardsData ? (
                <Row
                    className="main-container__cards-box"
                    justify="space-evenly"
                    gutter={16}
                >
                    {cardsData && renderCards(cardsData)}
                </Row>
            ) : (
                <div className="example">
                    <Spin className='spinner' size="large"/>
                </div>
            )}
        </div>
    )
}
