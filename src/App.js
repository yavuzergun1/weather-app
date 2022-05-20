import React from 'react'
import CurrentWeather from './components/CurrentWeather'
import CurrentWeather2 from './components/CurrentWeather2'
import {DataProvider} from './context/DataContext'
function App() {
  return (
    <DataProvider>
      <CurrentWeather/>
      <CurrentWeather2/>
    </DataProvider>
  )
}

export default App