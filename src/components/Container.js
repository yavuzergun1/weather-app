import React from 'react';
import '../App.css';
import { UseCityData } from '../context/CityDataContext';
import CurrentWeather from './CurrentWeather';
import DailyWeather from './DailyWeather';
import AllData from '../Data/AllData';

function Container() {
    // const {weatherCondition, isDay}= UseData();
    const {weeklyData, currentData, cityData, isDay, currentDataWeather, cityMain}= UseCityData();
    // const {cityMain}= UseCityData();
    // console.log(currentData.weather[0].main);
    // 
    // 
    console.log(currentData);
    console.log(weeklyData);
    console.log(currentDataWeather);
    console.log(cityMain);
    // if (!weeklyData){
    //   return  <p> yükleniyor...</p>
    // }
   
  
  return (
    <div className={`main-container ${currentDataWeather === undefined ? cityMain : currentDataWeather}-${isDay>-1 ? "day" : "night"} ` } >
   {/* ${ (currentDataWeather[0].main === undefined ? currentDataWeather[0].main : cityMain ).toLowerCase()}-${isDay>-1 ? "day" : "night"} */}
        <CurrentWeather/>
        <DailyWeather/>
        <AllData/>
    </div>
  )
}

export default Container