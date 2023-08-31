import React from 'react';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { selectErrorData } from './redux/slices/errorSlice'
import { MainPage } from "./pages/MainPage"
import { GamePage } from './pages/GamePage/GamePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

function App() {
  const error = useSelector(selectErrorData)
  const navigate = useNavigate()

  useEffect(() => {
    if (error) {
        navigate('/error')
    }
}, [error, navigate])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path='/game/:id' element={<GamePage/>} />
        <Route path='/error' element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;