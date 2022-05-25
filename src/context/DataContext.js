import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import moment from "moment";
import { usePosition } from "use-position";

const DataContext= createContext();

export const DataProvider= ({children})=>{
    const {latitude, longitude}= usePosition();
    const [weather, setweather]= useState([]);
    const [weatherCondition, setWeatherCondition]= useState();
    const [isDay, setIsDay]= useState()
    const [currentData, setCurrentData]= useState([])
    const values = {
        weather,
        setweather,
        setWeatherCondition,
        weatherCondition,
        isDay,
        setIsDay,
        currentData,
        setCurrentData,
        }
    

    const getWeatherData=  (lat, lon)=> { 
        const key= process.env.REACT_APP_WEATHER_DATA;
    
          
            const data=  axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude="current.name"&appid=${key}`);

            const currentData=  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${key}`);

            axios
            .all([data, currentData])
            .then(
              axios.spread((...responses)=>{
                const data= responses[0].data;
                const currentData= responses[1].data;
                
                setweather(data)
                setWeatherCondition(data.current.weather[0].main);
                setCurrentData(currentData)
                setIsDay((data.current.weather[0].icon).indexOf("d"));
              })
            )
             
      
        }
          useEffect (()=>{
          latitude && longitude &&  getWeatherData(latitude, longitude)
          // console.log(weather.timezone);
          },[latitude])

          // console.log(weather);
          // console.log(currentData);
          return <DataContext.Provider value={values} >{children}</DataContext.Provider>
}

export const UseData=()=>useContext(DataContext);