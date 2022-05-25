import React from 'react';
import axios from 'axios';
import { UseCityData } from '../context/CityDataContext';
import { useState, useEffect } from 'react';


function CityData() {
    const {cityData, setCityData, city, setCity, cityLat, setCityLat, cityLon, setCityLon}= UseCityData();

    const getCityData= async (city)=> { 
        const key= process.env.REACT_APP_WEATHER_DATA;
    
          try {
              const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&exclude="daily"&appid=${key}`)
          setCityData(data) 
          setCityLat(data.coord.lat)
          setCityLon(data.coord.lon)
        }
            catch (err){
                alert('yanlış şehir')
            }
            }  

            useEffect (()=>{
               city &&  getCityData(city)                
            },[city])
        
  return (
    <div>CityData</div>
  )
}

export default CityData