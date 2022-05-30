import React, { useState } from 'react';
import '../App.css';
import { UseCityData } from "../context/CityDataContext";
import timeZone from 'moment-timezone';
import moment from 'moment';
import { useEffect } from 'react';
import { usePosition } from 'use-position';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Day() {
    const {weeklyData, setWeeklyData, cityLat, cityLon}= UseCityData();
    const {latitude, longitude}= usePosition();
    const [dayData, setDayData]= useState(JSON.parse(localStorage.getItem("data")));
    const {id}= useParams();

useEffect(() => {
 weeklyData && localStorage.setItem("data", JSON.stringify(weeklyData.daily))
}, [weeklyData])

console.log(dayData[id]);
 
if(!dayData[id].temp){
    return <p>Loading...</p>
}

return (

    // 
    <div className={`route-container ${dayData[id].weather[0].main}-${(dayData[id].weather[0].icon).indexOf("d")>-1 ? "day" : "night"} ` }>
    <div className= "Day1">    
    <div className="time-container"> 
    <div className='day-day'>{moment().add(`${id}`, 'days').format('dddd') }</div>
             <div className='day-degree'> {Math.round(dayData[id].temp.max)}°C
             / {Math.round(dayData[id].temp.min)}°C</div> 
             <div className='day-icon'><img className='daily-icons'  src={`http://openweathermap.org/img/w/${dayData[id].weather[0].icon}.png`} alt="" /></div>
             <div className='description'>{dayData[id].weather[0].description}</div>
             </div>
    <div className='daily-temp'>
        <div className='daily-temp-topic'>Daily Temprature</div>
        <div>Morning: {dayData[id].temp.morn} </div>
        <div>Day: {dayData[id].temp.day} </div>
        <div>Eve: {dayData[id].temp.eve} </div>
        <div>Night: {dayData[id].temp.night} </div>
    </div>
    <div className='wind-topic'>
    <div>Wind Speed: {dayData[id].wind_speed} </div>
    <div>Humidity: %{dayData[id].humidity} </div>
    </div>
</div>          
             

    </div>
    
  )
}

export default Day