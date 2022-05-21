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
    console.log((isDay>-1 ? "day" : "night"));
    console.log(weatherCondition.toLowerCase());
    
  return (
    <div className={`main-container  ${weatherCondition.toLowerCase()}-${isDay>-1 ? "day" : "night"}`}>
       {/* ${(weather.current.weather[0].main)} */}
        <CurrentWeather/>
        <DailyWeather/>
    </div>
  )
}

export default Container