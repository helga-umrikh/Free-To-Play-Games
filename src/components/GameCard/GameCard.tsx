import React, { FC } from 'react'
import './GameCard.css'
import { Link } from 'react-router-dom'
import { Card, Typography } from 'antd'
import { Row, Col } from 'antd'
import { ICard } from '../../interfaces'

const { Meta } = Card
const { Text, Title } = Typography

export const GameCard: FC<IGameCardProps> = ({
    cardInfo: { id, thumbnail, genre, release_date, title, developer },
}) => {
    return (
        <div className="game-container">
            <Col className="gutter-row" span={8}>
                <Link to={`/game/${id}`}>
                    <Card
                        className="game-card"
                        hoverable
                        cover={<img alt="game poster" src={thumbnail} />}
                    >
                        <Meta
                            description={
                                <Col>
                                    <Row justify="space-between">
                                        <Text type="secondary">{genre}</Text>
                                        <Text type="secondary">
                                            {release_date}
                                        </Text>
                                    </Row>
                                    <Title level={3}>{title}</Title>
                                    <Text type="secondary">{developer}</Text>
                                </Col>
                            }
                        />
                    </Card>
                </Link>
            </Col>
        </div>
    )
}

interface IGameCardProps {
    cardInfo: ICard
}
