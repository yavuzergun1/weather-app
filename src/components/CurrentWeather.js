import React from 'react'
import {UseData} from '../context/DataContext'


function CurrentWeather() {
  const {currentWeather, setCurrentWeather}= UseData();
  const celcius= "°C"
  return (
    <div>
   {(currentWeather.temp ? currentWeather.temp &&`${ Math.round(currentWeather.temp)}°C ` : "")}
    </div>
  )
}

export default CurrentWeather