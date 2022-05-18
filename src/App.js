import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { usePosition } from 'use-position'

function App() {
  const {latitude, longitude}=  usePosition();
  const [weather, setweather] = useState([]);
   
  const getWeatherData= async (lat, lon)=> { 
    const key= process.env.REACT_APP_WEATHER_DATA;

      try{
        const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
        console.log(data);
        setweather(data);
      }         
      catch {
     
      }
  }
      useEffect (()=>{
      latitude && longitude &&  getWeatherData(latitude, longitude)
      },[latitude])

  
    

 
  return (
    <div>
    city: {weather.name}
      <hr />
    Temp: {Math.round(weather.main.temp)} degree
    <hr />
    min-temp: {Math.round(weather.main.temp_min)} degree
    </div>
  )

  }

export default App;
