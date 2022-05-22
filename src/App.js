import React from 'react';
import Container from './components/Container';
import CurrentWeather from './components/CurrentWeather';
import DailyWeather from './components/DailyWeather';
import {DataProvider} from './context/DataContext';
function App() {
  return (
    <DataProvider>
      <Container/>
    </DataProvider>
  )
}

export default App