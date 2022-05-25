import React from 'react';
import '../App.css';
import {UseData} from '../context/DataContext';
import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';
import Deneme from './Deneme';

function Container() {
    const {weather, weatherCondition, isDay}= UseData();
    console.log(isDay);
    if (!weather.current){
        return <p></p>
    }
  return (
    <div className={`main-container ${weatherCondition.toLowerCase()}-${isDay>-1 ? "day" : "night"}`}>
        <CurrentWeather/>
        <DailyWeather/>
        {/* <Deneme/> */}
    </div>
  )
}

export default Container