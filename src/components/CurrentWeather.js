import React, { useState } from 'react'
import {UseData} from '../context/DataContext'
import moment from 'moment';
import { UseCityData } from '../context/CityDataContext';



function CurrentWeather() {
  const {city, setCity, cityData, cityLat, cityLon}= UseCityData();
  const [form, setForm]= useState();
  const {weather, currentData, setCurrentData }= UseData();
  
  if (!weather.current){
    return <p></p>
  }
  console.log(currentData);
 
  return (
<div>

  <form  className='input-city' onSubmit={(e)=>{e.preventDefault(); setCity(form)}}>
  <input id='input' type="text" placeholder='Enter a City Name' onChange={(e)=> setForm(e.target.value)} />
</form>
  <div className='header'>
  <div className='first-container' >
    <div className='timezone'>{cityData === undefined ? `${currentData.sys.country} / ${currentData.name}`  : cityData.name}</div> 
   
        <div className="data">
        <img className='current-icon'  src={cityData === undefined ? `http://openweathermap.org/img/w/${weather.current.weather[0].icon}.png` : `http://openweathermap.org/img/w/${cityData.weather[0].icon}.png`} alt="" />
        <div className='degree-container'> 
        <div>{cityData === undefined ? currentData.weather[0].description : cityData.weather[0].description }</div>
        <h3 className='current-deg' >{cityData === undefined ? (currentData ? currentData.main.temp &&`${ Math.round(currentData.main.temp)}°C ` : "") : `${Math.round(cityData.main.temp)}°C`} </h3>
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
        <div className="currentData">Feels Like: {`${ Math.round(currentData.main.feels_like)}`}°C </div>
        <div className="currentData">Humidity: %{currentData.main.humidity} </div>
        <div className="currentData">Wind Speed: {currentData.wind.speed}m/s </div>
        <div className="currentData">Max Temprature: {`${ Math.round(currentData.main.temp_max)}`}°C</div>
        <div className="currentData">Min Temprature: {`${ Math.round(currentData.main.temp_min)}`}°C</div>
            
      </div>

</div>
  )
}

export default CurrentWeather