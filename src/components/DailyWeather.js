import React, { useState } from 'react';
import {UseData} from '../context/DataContext';
import { useEffect } from 'react';
import moment from 'moment';
import './DailyWeather.css'
import '../App.css'
import axios from 'axios';
import { UseCityData } from '../context/CityDataContext';

function DailyWeather() {
   const [dailyData, setDailyData]= useState();
    const{weather}= UseData();
    const {cityLon, cityLat}= UseCityData();
    const getDailyData= async (city)=> { 
      const key= process.env.REACT_APP_WEATHER_DATA;
  
        try {
          const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=metric&exclude="daily"&appid=${key}`)
        setDailyData(data)}
            catch (err) {
             
            }
          }  
     
          useEffect (()=>{
          cityLat &&  getDailyData()
          },[cityLat])
         console.log(dailyData);

    if (!weather.daily){
        return <p>yükleniyor...</p>
      }

  return (
    <div className='dailyWeather'>
        <h1 id='daily-topic'  className='card-container'>7 Days Forecast</h1>
      <div className='cards-container'>
      {(dailyData === undefined ? weather : dailyData ).daily.map((day, index)=>{
        
       return <div key={index} className={index===0 ? 'none' : 'card-container'}>              
             <div  className='day-day'>{moment().add(`${index}`, 'days').format('dddd') }</div>
             <div className='day-degree'> {Math.round(day.temp.max)}°C
             / {Math.round(day.temp.min)}°C</div> 
             <div className='day-icon'><img className='daily-icons'  src={`http://openweathermap.org/img/w/${(dailyData === undefined ? weather : dailyData ).daily[index].weather[0].icon}.png`} alt="" /></div>
             <div className='description'>{(dailyData === undefined ? weather : dailyData ).daily[index].weather[0].description}</div>
             </div>
                 
   })}
     
        
      </div>
      <div id='note' className='card-container '>coded by Yavuz Ergun</div>
     
         </div>
  )
}

export default DailyWeather