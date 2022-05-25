import React from 'react';
import {UseData} from '../context/DataContext'
import moment from 'moment';
import './DailyWeather.css'
import '../App.css'

function DailyWeather() {
   
    const{weather}= UseData();
    if (!weather.daily){
        return <p>yükleniyor...</p>
      }

  return (
    <div className='dailyWeather'>
    <h1 className='days-topic'>7 Days Forecast</h1>
      <div className='cards-container'>
      
      {weather.daily.map((day, index)=>{
       
          return <div key={index} className={index===0 ? 'none' : 'card-container'}>              
                <div  className='day-day'>{moment().add(`${index}`, 'days').format('dddd') }</div>
                <div className='day-degree'> {Math.round(day.temp.max)}°C
                / {Math.round(day.temp.min)}°C</div> 
                <div className='day-icon'><img className='daily-icons'  src={`http://openweathermap.org/img/w/${weather.daily[index].weather[0].icon}.png`} alt="" /></div>
                <div className='description'>{weather.daily[index].weather[0].description}</div>
                </div>
                    
      })}
        
      </div>
      <div className='note'>coded by Yavuz Ergun</div>
     
         </div>
  )
}

export default DailyWeather