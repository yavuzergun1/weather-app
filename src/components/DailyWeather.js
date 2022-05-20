import React from 'react';
import {UseData} from '../context/DataContext'
import moment from 'moment';

function DailyWeather() {
   
    const{weather}= UseData();
    if (!weather.daily){
        return <p>yükleniyor...</p>
      }

  return (
    <div>
      <ul>
    <h2>8 Days Forecast</h2>
      {weather.daily.map((day, index)=>{
          return <li key={index}> 
                <div><span>{moment().add(`${index}`, 'days').format('dddd') }</span>
                <span><img src={`http://openweathermap.org/img/w/${weather.daily[index].weather[0].icon}.png`} alt="" />
                </span>
                <span> {Math.round(day.temp.max)}°C
                / {Math.round(day.temp.min)}°C</span> </div>
                <br /></li>
          
      })}
        {/* {weather.daily[0].dt} */}
         </ul>
         </div>
  )
}

export default DailyWeather