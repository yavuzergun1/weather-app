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
    <div className={`route-container ${dayData[id].weather[0].main}-${(dayData[id].weather[0].icon).indexOf("d")>-1 ? "day" : "night"} ` }>
    <div className= "Day1">  

    <div className="route-header"> 
    <div className="route-time">
    <div className='route-day'>{moment().add(`${id}`, 'days').format('dddd') }</div>
    <div className="route-date">{moment().add(`${id}`, 'days').format(`D MMM YYYY`)}</div>
    </div>
        <div className='route-icon'><img className='daily-icons'  src={`http://openweathermap.org/img/w/${dayData[id].weather[0].icon}.png`} alt="" /></div>
    <div className='route-weather'>
        <div className='route-description'>{dayData[id].weather[0].description}</div>
        <div className='route-degree'> {Math.round(dayData[id].temp.max)}°C
             / {Math.round(dayData[id].temp.min)}°C </div> 
    </div>
    </div>
    


    <div className="route-degree-container"> 
   
    <div className='daily-temp'>
        <div className='daily-temp-topic'>Daily Temprature</div><br />
        <div className='daily-temp-data'><div>Morning:</div> <div> {Math.round(dayData[id].temp.morn)}°C </div></div>
        <div className='daily-temp-data'><div>Day:</div> <div> {Math.round(dayData[id].temp.day)}°C </div></div>
        <div className='daily-temp-data'><div>Evening:</div> <div> {Math.round(dayData[id].temp.eve)}°C </div></div>
        <div className='daily-temp-data'><div>Night:</div> <div> {Math.round(dayData[id].temp.night)}°C </div></div>
     
        </div>
    <div className='wind-topic'>
        <div className='wind-data'> <div>Humidity:  </div> <div className='wind-hum'> %{dayData[id].humidity}</div></div>
        <div className='wind-data'> <div>Wind Speed: </div> <div className='wind-des'> {dayData[id].wind_speed}m/sn </div></div>
        <div className='arrow'> 
        <svg style={{transform:`rotate(${dayData[id].wind_deg}deg)`}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"/></svg>
        </div>
    </div>
    </div>
</div>          
             

    </div>
    
  )
}

export default Day