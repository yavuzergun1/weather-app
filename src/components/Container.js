import React from 'react'
import '../App.css'
import {UseData} from '../context/DataContext'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'

function Container() {
    const {weather}= UseData();
    if (!weather.current ){
        return <p></p>
      }
    console.log((weather.current.weather[0].main));
  return (
    <div className={`main-container  Drizzle`}>
       {/* ${(weather.current.weather[0].main)} */}
        <CurrentWeather/>
        <DailyWeather/>
    </div>
  )
}

export default Container