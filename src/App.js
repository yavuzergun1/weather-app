import React from 'react'
import CurrentWeather from './components/CurrentWeather'
import DailyWeather from './components/DailyWeather'
import {DataProvider} from './context/DataContext'
function App() {
  return (
    <DataProvider>
      <CurrentWeather/>
      <DailyWeather/>
    </DataProvider>
  )
}

export default App