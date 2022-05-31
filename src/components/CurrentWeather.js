import React, { useState } from 'react';
import moment from 'moment';
import { UseCityData } from '../context/CityDataContext';
import { BsFillCursorFill } from 'react-icons/bs';


function CurrentWeather() {
  const {setCity,  currentData, weeklyData}= UseCityData();
  const [form, setForm]= useState();
  console.log(currentData);
  if (!weeklyData){ 
    return <p></p>
  }
  return (
<div>

  <form  className='input-city' onSubmit={(e)=>{e.preventDefault(); setCity(form)}}>
  <input id='input' type="text" placeholder='Enter a City Name' onChange={(e)=> setForm(e.target.value)} />
</form>
  <div className='header'>
  <div className='first-container' >
    <div className='timezone'>{ `${currentData.sys.country} / ${currentData.name}`  }</div> 
   
        <div className="data">
        <img className={`${currentData.weather[0].main === 'Clear' ? 'rotate' : 'xrotate'}`}   src={`http://openweathermap.org/img/w/${weeklyData.current.weather[0].icon}.png`} alt="" /> {/* weather yerine weeklyData konulacak */}
        <div className='degree-container'> 
        <div>{currentData.weather[0].description}</div>
        <h3 className='current-deg' >{currentData.main.temp &&`${ Math.round(currentData.main.temp)}°C ` } </h3>
        </div>
       
      </div>
  </div>
    
    
    <div className='second-container'>
      <div className="day">{moment().format(`D MMM YYYY`)}</div>
      <div className="day">{moment().format("dddd")}</div>
      <div className="day">{moment().tz(`${weeklyData.timezone}`).format('LTS')}</div>    
    </div>


</div>
<div className='wind-container'>
<div className="currentData">Wind Speed: {currentData.wind.speed}m/s </div>
<div className='wind-arrow' style={{transform:`rotate(${currentData.wind.deg-45}deg)`}} ><BsFillCursorFill/></div>
  </div>
      <div className="currentData-container">
        <div className="currentData">Feels Like: {`${ Math.round(currentData.main.feels_like)}`}°C </div>
        <div className="currentData">Humidity: %{currentData.main.humidity} </div>
        <div className="currentData">Max Temprature: {`${ Math.round(currentData.main.temp_max)}`}°C</div>
        <div className="currentData">Min Temprature: {`${ Math.round(currentData.main.temp_min)}`}°C</div>
            
      </div>

</div>
  )
}

export default CurrentWeather