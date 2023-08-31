import React from 'react'
import './ErrorPage.css'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Button } from 'antd'
import { selectErrorData } from '../../redux/slices/errorSlice'
import { setErrorData } from '../../redux/slices/errorSlice'
import { useNavigate } from 'react-router-dom'
const { Title } = Typography

export const ErrorPage = () => {
    const error = useSelector(selectErrorData)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const clearErrorState = () => {
        dispatch(setErrorData())
        navigate('/')
    }

    return (
        <div className="error-page-container">
            <Title level={2}>Error</Title>
            <Title level={4}>{error && error.message}</Title>
            <Button
                className="navigate-home-btn"
                type="primary"
                onClick={clearErrorState}
            >
                Home
            </Button>
        </div>
    )
}
