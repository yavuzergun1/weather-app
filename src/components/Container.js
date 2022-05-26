import React from 'react';
import '../App.css';
import { UseCityData } from '../context/CityDataContext';
import {UseData} from '../context/DataContext';
import CityData from './CityData';
import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';
import Deneme from './Deneme';

function Container() {
    const {weather, weatherCondition, isDay}= UseData();
    const {cityMain}= UseCityData();
    if (!weather.current){
      return <p></p>
    }
    
    console.log(cityMain);
    // 
    // 
  return (
    <div  className={`main-container ${ (cityMain === undefined ? weatherCondition : cityMain ).toLowerCase()}-${isDay>-1 ? "day" : "night"}`}>
        <CurrentWeather/>
        <DailyWeather/>
        <CityData/>
        {/* <Deneme/> */}
    </div>
  )
}

export default Container