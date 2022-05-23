import React from 'react';
import {UseData} from '../context/DataContext'
import moment from 'moment';
import './DailyWeather.css'
import '../App.css'
import { Link, Outlet } from 'react-router-dom';

function DailyWeather() {
   
    const{weather}= UseData();
    if (!weather.daily){
        return <p>yükleniyor...</p>
      }

  return (
    <div className='dailyWeather'>
    <h1 className='days-topic'>8 Days Forecast</h1>
      <div className='cards-container'>
      
      {weather.daily.map((day, index)=>{
       
          return   <Link style={{textDecoration: "none"}} key={index} to={`./routes/Day${index}` } > 
                <div  className='card-container'>              
                <div  className='day-day'>{moment().add(`${index}`, 'days').format('dddd') }</div>
                <div className='day-degree'> {Math.round(day.temp.max)}°C
                / {Math.round(day.temp.min)}°C</div> 
                <div className='day-icon'><img className='daily-icons'  src={`http://openweathermap.org/img/w/${weather.daily[index].weather[0].icon}.png`} alt="" /></div>
                <div className='description'>{weather.daily[index].weather[0].description}</div>
                </div>
                    </Link>
      })}
        {/* {weather.daily[0].dt} */}
        
      </div>
      <Outlet/>
         </div>
  )
}

export default DailyWeather