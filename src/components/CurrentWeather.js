import React from 'react'
import {UseData} from '../context/DataContext'
import moment from 'moment';



function CurrentWeather() {
  const {weather, currentData}= UseData();



  if (!weather.current ){
    return <p></p>
  }
  
  return (
<div>
  <div className='header'>
  <div className='first-container' >
    <h1 className='timezone'> {currentData.sys.country} / {currentData.name}</h1> 
        
        <div className="data">
        <img className='current-icon'  src={`http://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`} alt="" />
        <div className='degree-container'> 
        <div>{weather.current.weather[0].description}</div>
        <h3 className='current-deg' >{(weather.current ? weather.current.temp &&`${ Math.round(weather.current.temp)}°C ` : "")} </h3>
        </div>
       
      </div>
  </div>
    
    
    <div className='second-container'>
      <div className="day">{moment().format(`D MMM YYYY`)}</div>
      <div className="day">{moment().format("dddd")}</div>
      <div className="day">{moment().format('LTS')}</div>    
    </div>

  </div>
      <div className="currentData-container">
        <div className="currentData">Feels Like: {`${ Math.round(weather.current.feels_like)}`}°C </div>
        <div className="currentData">Humidity: %{weather.current.humidity} </div>
        <div className="currentData">Wind Speed: {weather.current.wind_speed}m/s </div>
        <div className="currentData">Max Temprature: {`${ Math.round(weather.daily[0].temp.max)}`}°C</div>
        <div className="currentData">Min Temprature: {`${ Math.round(weather.daily[0].temp.min)}`}°C</div>
            
      </div>

</div>
  )
}

export default CurrentWeather