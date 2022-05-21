import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import moment from "moment";
import { usePosition } from "use-position";

const DataContext= createContext();

export const DataProvider= ({children})=>{
    const {latitude, longitude}= usePosition();
    const [weather, setweather]= useState([]);
   const [weatherCondition, setWeatherCondition]= useState();
    const values = {
        weather,
        setweather,
        
    }
    

    const getWeatherData= async (lat, lon)=> { 
        const key= process.env.REACT_APP_WEATHER_DATA;
    
          try{
            const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude="name"&appid=${key}`)
            setweather(data)
            setWeatherCondition(data.current.weather[0].description)
            console.log(data);
            console.log(weatherCondition);
          }         
          catch {
         console.log('hata');
          }
      }
          useEffect (()=>{
          latitude && longitude &&  getWeatherData(latitude, longitude)
          // console.log(weather.timezone);
          },[ latitude])


          return <DataContext.Provider value={values} >{children}</DataContext.Provider>
}

export const UseData=()=>useContext(DataContext);