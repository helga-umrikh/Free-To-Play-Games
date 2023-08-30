import React from 'react'
import './MainFilters.css'
import { Select, Typography } from 'antd'
const { Paragraph } = Typography

export const MainFilters = () => {
    return (
        <div className="main-filters">
            <div>
                <Paragraph className="main-filters__label" type="secondary">
                    Platform:
                </Paragraph>
                <Select
                    className="main-filters__selector"
                    bordered={false}
                    options={[
                        {
                            value: 'all',
                            label: 'All Platforms',
                        },
                        {
                            value: 'windows',
                            label: 'Windows (PC)',
                        },
                        {
                            value: 'browser',
                            label: 'Browser (Web)',
                        },
                    ]}
                    defaultValue="all"
                ></Select>
            </div>
            <div>
                <Paragraph className="main-filters__label" type="secondary">
                    Genre:
                </Paragraph>
                <Select
                    className="main-filters__selector"
                    bordered={false}
                    options={[
                        {
                            value: 'All Genres',
                            label: 'All Genres',
                        },
                        {
                            value: 'MMO',
                            label: 'MMO',
                        },
                        {
                            value: 'MMORPG',
                            label: 'MMORPG',
                        },
                        {
                            value: 'Shooter',
                            label: 'Shooter',
                        },
                        {
                            value: 'Strategy',
                            label: 'Strategy',
                        },
                        {
                            value: 'Moba',
                            label: 'Moba',
                        },
                        {
                            value: 'Card Games',
                            label: 'Card Games',
                        },
                        {
                            value: 'Racing',
                            label: 'Racing',
                        },
                        {
                            value: 'Sports',
                            label: 'Sports',
                        },
                        {
                            value: 'Social',
                            label: 'Social',
                        },
                        {
                            value: 'Fighting',
                            label: 'Fighting',
                        },
                    ]}
                    defaultValue="All Genres"
                ></Select>
            </div>
            <div>
                <Paragraph className="main-filters__label" type="secondary">
                    Sort By:
                </Paragraph>
                <Select
                    className="main-filters__selector"
                    bordered={false}
                    options={[
                        {
                            value: 'Relevance',
                            label: 'Relevance',
                        },
                        {
                            value: 'Popularity',
                            label: 'Popularity',
                        },
                        {
                            value: 'Release Date',
                            label: 'Release Date',
                        },
                        {
                            value: 'Alphabetical',
                            label: 'Alphabetical',
                        },
                    ]}
                    defaultValue="Relevance"
                ></Select>
            </div>
        </div>
    )
}
