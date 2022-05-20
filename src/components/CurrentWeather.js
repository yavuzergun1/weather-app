import React from 'react'
import {UseData} from '../context/DataContext'
import moment from 'moment';


function CurrentWeather() {
  const {currentWeather, weather}= UseData();
 

  if (!weather.current){
    return <p></p>
  }
  return (
    <div>
    
    
   {(weather.current ? weather.current.temp &&`${ Math.round(weather.current.temp)}°C ` : "")}
        
        <p className="day"> {moment().format(`D MMM YYYY`)}</p>
        <p className="day"> {moment().format("dddd")}</p>
        <p className="day"> {moment().format('LTS')}</p>
    </div>
  )
}

export default CurrentWeather