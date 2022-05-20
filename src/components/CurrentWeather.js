import React from 'react'
import {UseData} from '../context/DataContext'


function CurrentWeather() {
  const {currentWeather, setCurrentWeather}= UseData();
  return (
    <div>
      {Math.round(currentWeather.temp)}°C
    </div>
  )
}

export default CurrentWeather