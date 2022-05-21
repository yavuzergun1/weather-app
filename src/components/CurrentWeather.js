import React from 'react'
import {UseData} from '../context/DataContext'
import moment from 'moment';



function CurrentWeather() {
  const {weather, isDay}= UseData();



  if (!weather.current ){
    return <p></p>
  }
  return (
<div>
    <div className='first-container' >
    <h1 className='timezone'>{weather.timezone}  </h1> 
        <img className='current-icon'  src={`http://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`} alt="" />
      <div className='degree-container'> 
        <div>{weather.current.weather[0].description}</div>
        <h3 className='current-deg' >{(weather.current ? weather.current.temp &&`${ Math.round(weather.current.temp)}°C ` : "")} </h3>
      </div>
    </div>
    
    <div className='second-container'>
    <p className="day"> {moment().format(`D MMM YYYY`)}</p>
    <p className="day"> {moment().format("dddd")}</p>
    <p className="day"> {moment().format('LTS')}</p>
    </div>


</div>
  )
}

export default CurrentWeather