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
import { BsFillCursorFill } from 'react-icons/bs';

function Day() {
    const {weeklyData}= UseCityData();
    const {latitude, longitude}= usePosition();
    const [dayData, setDayData]= useState();
    const {id}= useParams();

    useEffect(() => {
        weeklyData && localStorage.setItem("data", JSON.stringify(weeklyData.daily))
        setDayData(JSON.parse(localStorage.getItem("data")))
        console.log(weeklyData);
    }, [weeklyData])
    
 
if(!dayData){
    return <p>Loading...</p>
}
// 
return (
    <div className={`route-container  route-${dayData[id].weather[0].main}-${(dayData[id].weather[0].icon).indexOf("d")>-1 ? "day" : "night"}` }>
    <div className= "Day1">  

    <div className="route-header"> 
    <div className="route-time">
    <div className='route-day'>{moment().add(`${id}`, 'days').format('dddd') }</div>
    <div className="route-date">{moment().add(`${id}`, 'days').format(`D MMM YYYY`)}</div>
    </div>
    <div className='route-top-degree'>
    <img className={`${dayData[id].weather[0].main === 'Clear' ? 'route-rotate' : 'xrotate'}`}  src={`http://openweathermap.org/img/w/${dayData[id].weather[0].icon}.png`} alt="" />
    <div className='route-weather'>
        <div className='route-description'>{dayData[id].weather[0].description}</div>
        <div className='route-degree'> {Math.round(dayData[id].temp.max)}°C
             / {Math.round(dayData[id].temp.min)}°C </div> 
    </div>
       
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
        <div className='route-wind-container'> 
        <div className='wind-data'>Wind Direction:</div>
        <div className='route-wind-arrow' style={{transform:`rotate(${dayData[id].wind_deg-45}deg)`}} ><BsFillCursorFill/></div>
        </div>
    </div>
    </div>
</div>          
             

    </div>
    
  )
}

export default Day