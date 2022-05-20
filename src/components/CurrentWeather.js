import React from 'react'
import {UseData} from '../context/DataContext'


function CurrentWeather() {
  const {currentWeather, setCurrentWeather}= UseData();
  return (
    <div>
      {currentWeather.temp}
    </div>
  )
}

export default CurrentWeather