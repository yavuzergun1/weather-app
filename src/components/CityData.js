import React from 'react';
import axios from 'axios';
import { UseCityData } from '../context/CityDataContext';
import { useState, useEffect } from 'react';


function CityData() {
    const {cityData, setCityData}= UseCityData();
    const { city, setCity}= UseCityData();
    const { cityLat, setCityLat}= UseCityData();
    const { cityLon, setCityLon}= UseCityData();
    const {cityMain, setCityMain}= UseCityData();

    const getCityData= async (city)=> { 
        const key= process.env.REACT_APP_WEATHER_DATA;
    
          try {
              const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&exclude="daily"&appid=${key}`)
          setCityData(data) 
        //   setCityMain(data.weather[0].main)
          setCityLat(data.coord.lat)
          setCityLon(data.coord.lon)
          setCityMain(data.weather[0].main);
        }
            catch (err){
                alert('Please Enter a Valid City Name')
            }
            }  

            useEffect (()=>{
               city &&  getCityData(city)                
            },[city])
      console.log(cityData);
  return (
    <div></div>
  )
}

export default CityData