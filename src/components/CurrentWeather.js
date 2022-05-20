import React from 'react'
import {UseData} from '../context/DataContext'
import moment from 'moment';



function CurrentWeather() {
  const {weather}= UseData();



  if (!weather.current){
    return <p></p>
  }
  return (
    <div>
    
    <h1>{weather.timezone} </h1> <h3> {(weather.current ? weather.current.temp &&`${ Math.round(weather.current.temp)}°C ` : "")} <img src={`http://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`} alt="" /></h3>
    
        <p className="day"> {moment().format(`D MMM YYYY`)}</p>
        <p className="day"> {moment().format("dddd")}</p>
        <p className="day"> {moment().format('LTS')}</p>
    </div>
  )
}

export default CurrentWeather