import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { GamePage } from './pages/GamePage/GamePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

function App() {
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