import React from 'react';
import '../App.css';
import { UseCityData } from '../context/CityDataContext';
import CurrentWeather from './CurrentWeather';
import WeeklyWeather from './weeklyWeather';
import Data from '../Data/Data';

function Container() {
    const {isDay, currentDataWeather, cityMain}= UseCityData();
 
    // if (!weeklyData){
    //   return  <p> yükleniyor...</p>
    // }
   
  
  return (
    <div className={`main-container ${currentDataWeather === undefined ? cityMain : currentDataWeather}-${isDay>-1 ? "day" : "night"} ` } >

        <CurrentWeather/>
        <WeeklyWeather/>
        <Data/>
    </div>
  )
}

export default Container