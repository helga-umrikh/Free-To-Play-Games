import React from 'react'
import './MainFilters.css'
import { Select, Typography } from 'antd'
import { useDispatch } from 'react-redux'
import { filterCardsData } from '../../redux/slices/cardsSlice'
const { Paragraph } = Typography

export const MainFilters = () => {
    const dispatch = useDispatch();
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
                            value: 'pc',
                            label: 'Windows (PC)',
                        },
                        {
                            value: 'browser',
                            label: 'Browser (Web)',
                        },
                    ]}
                    defaultValue="all"
                    onSelect={value => dispatch(filterCardsData({ value, type: 'platform'}))}
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
                            value: '',
                            label: 'All Genres',
                        },
                        {
                            value: 'mmo',
                            label: 'MMO',
                        },
                        {
                            value: 'mmorpg',
                            label: 'MMORPG',
                        },
                        {
                            value: 'shooter',
                            label: 'Shooter',
                        },
                        {
                            value: 'strategy',
                            label: 'Strategy',
                        },
                        {
                            value: 'moba',
                            label: 'Moba',
                        },
                        {
                            value: 'card',
                            label: 'Card Games',
                        },
                        {
                            value: 'racing',
                            label: 'Racing',
                        },
                        {
                            value: 'sports',
                            label: 'Sports',
                        },
                        {
                            value: 'social',
                            label: 'Social',
                        },
                        {
                            value: 'fighting',
                            label: 'Fighting',
                        },
                    ]}
                    defaultValue="All Genres"
                    onSelect={value => dispatch(filterCardsData({ value, type: 'category'}))}
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
                            value: 'relevance',
                            label: 'Relevance',
                        },
                        {
                            value: 'popularity',
                            label: 'Popularity',
                        },
                        {
                            value: 'release-date',
                            label: 'Release Date',
                        },
                        {
                            value: 'alphabetical',
                            label: 'Alphabetical',
                        },
                    ]}
                    defaultValue="Relevance"
                    onSelect={value => dispatch(filterCardsData({ value, type: 'sort-by'}))}
                ></Select>
            </div>
        </div>
    )
}
