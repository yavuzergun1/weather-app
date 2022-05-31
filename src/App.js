import React from 'react';
import Container from './components/Container';
import './App.css'
import { CityDataProvider } from './context/CityDataContext';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Day from './routes/Day';
import DailyWeather from './components/weeklyWeather';
function App() {
  return (
    <CityDataProvider> 
    <BrowserRouter basename='/weather-app'> 
    <Routes> 
      <Route path="/" element={<Container/>} />
      <Route path="/Days" element={<DailyWeather/>} />
      <Route path=":id" element={<Day/>} />
    </Routes>
    </BrowserRouter>
    </CityDataProvider>
  )
}

export default App