import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectGameData } from '../../redux/slices/gameSlice'
import './GamePage.css'
import {
    Typography,
    Divider,
    Image,
    Carousel,
    Row,
    Descriptions,
    Button,
    Spin,
} from 'antd'
const { Title } = Typography
import getGameData from '../../api/getGameData'

export const GamePage = () => {
    const contentStyle = {
        height: '200px',
        color: '#fff',
        lineHeight: '200px',
        background: '#364d79',
    }

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        getGameData(id, dispatch)
    }, [dispatch, id])

    const gameData = useSelector(selectGameData)
    let formattedDate = ''
    if (gameData) {
        const parts = gameData.release_date.split('-')
        formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`
    }

    return (
        <div>
            <Divider orientation="top">
                <Title level={2}>Game Name</Title>
            </Divider>
            <div className="game-page-container">
                {gameData ? (
                    <>
                        <Row
                            justify="space-between"
                            className="game-page__description"
                        >
                            <Image
                                width={200}
                                src={gameData.thumbnail}
                                preview={{
                                    mask: (
                                        <div
                                            style={{
                                                borderRadius: '50%',
                                                height: '100%',
                                            }}
                                        />
                                    ),
                                }}
                                style={{ borderRadius: '3%', height: '100%' }}
                            />
                            <div className="game-descriptions">
                                <Descriptions
                                    size="small"
                                    items={[
                                        {
                                            key: '1',
                                            label: 'Title',
                                            children: gameData.title,
                                        },
                                        {
                                            key: '2',
                                            label: 'Developer',
                                            children: gameData.developer,
                                        },
                                        {
                                            key: '3',
                                            label: 'Publisher',
                                            children: gameData.publisher,
                                        },
                                        {
                                            key: '4',
                                            label: 'Release Date',
                                            children: formattedDate,
                                        },
                                        {
                                            key: '5',
                                            label: 'Genre',
                                            children: gameData.genre,
                                        },
                                        {
                                            key: '6',
                                            label: 'Platform',
                                            children: gameData.platform,
                                        },
                                    ]}
                                />
                            </div>
                        </Row>
                        <Carousel autoplay>
                            {gameData.screenshots.map(({ image }, idx) => {
                                return (
                                    <div key={idx}>
                                        <img
                                            className="carousel-image"
                                            style={contentStyle}
                                            src={image}
                                        />
                                    </div>
                                )
                            })}
                        </Carousel>
                        <Button
                            className="back-to-games-btn"
                            type="primary"
                            shape="round"
                        >
                            <Link to="/">BACK TO GAMES LIST</Link>
                        </Button>
                    </>
                ) : (
                    <Spin className="spinner" size="large" />
                )}
            </div>
        </div>
    )
}
