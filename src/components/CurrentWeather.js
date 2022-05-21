import React from 'react'
import {UseData} from '../context/DataContext'
import moment from 'moment';



function CurrentWeather() {
  const {weather, weatherCondition}= UseData();



  if (!weather.current ){
    return <p></p>
  }
  return (
<div>
    <div className='current-container'>
      <div className='' ></div>
    <h1 className='timeZone'>{weather.timezone} </h1> 
    <h3 className='current-deg' >{(weather.current ? weather.current.temp &&`${ Math.round(weather.current.temp)}°C ` : "")} <img style={{blockSize: '100px'}} src={`http://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`} alt="" /></h3>
   <p>{weather.current.weather[0].description} </p>
   <p>{(weather.current.weather[0].icon).indexOf("n")} </p>
    
    <p className="day"> {moment().format(`D MMM YYYY`)}</p>
    <p className="day"> {moment().format("dddd")}</p>
    <p className="day"> {moment().format('LTS')}</p>
    </div>


</div>
  )
}

export default CurrentWeather