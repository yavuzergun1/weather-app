import React from 'react';
import Container from './components/Container';
import './App.css'
import { CityDataProvider } from './context/CityDataContext';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Day1 from './routes/Day1';
function App() {
  return (
    <CityDataProvider> 
    <BrowserRouter> 
    <Routes> 
      <Route path="/weather-app" element={<Container/>} />
      <Route path=":Day1" element={<Day1/>} />

    </Routes>
    </BrowserRouter>
    </CityDataProvider>
  )
}

export default App