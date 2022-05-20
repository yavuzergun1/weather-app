import React from 'react'
import {UseData} from '../context/DataContext'
import moment from 'moment';


function CurrentWeather() {
  const {currentWeather, setCurrentWeather}= UseData();
  return (
    <div>
   {(currentWeather ? currentWeather.temp &&`${ Math.round(currentWeather.temp)}°C ` : "")}
   {currentWeather.timezone}
        <p className="day"> {moment().format("D MMM YYYY")}</p>
        <p className="day"> {moment().format("dddd")}</p>
        <p className="day"> {moment().format('LTS')}</p>
    </div>
  )
}

export default CurrentWeather