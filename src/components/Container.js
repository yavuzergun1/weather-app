import React from 'react'
import '../App.css'
import {UseData} from '../context/DataContext'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'

function Container() {
    const {weather, weatherCondition, isDay}= UseData();
    
    if (!weather.current){
        return <p></p>
    }
 
  return (
    <div className={`main-container ${weatherCondition.toLowerCase()}-${isDay>-1 ? "day" : "night"}`}>
        <CurrentWeather/>
        <DailyWeather/>
    </div>
  )
}

export default Container