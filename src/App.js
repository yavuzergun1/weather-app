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
        const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=daily&units=metric&appid=${key}`)
        
        setweather(data)
        console.log(data);
      }         
      catch {
     
      }
  }
      useEffect (()=>{
      latitude && longitude &&  getWeatherData(latitude, longitude)
      },[latitude])

  
      

 
  return (
    <div>
      <ul> 
     <li>{weather.timezone} </li>
     <li>{}</li>
       </ul>
    
    </div>
  )

  }

export default App;
