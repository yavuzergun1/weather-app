import React from 'react'
import '../App.css'
import {UseData} from '../context/DataContext'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'

function Container() {
    const {weather, weatherCondition, isDay}= UseData();
    console.log(isDay);
    if (!weather.current){
        return <p></p>
    }
    // ${weatherCondition.toLowerCase()}-${isDay>-1 ? "day" : "night"}
  return (
    <div className={`main-container clouds-night`}>
        <CurrentWeather/>
        <DailyWeather/>
    </div>
  )
}

export default Container