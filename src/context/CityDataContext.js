import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CityDataContext= createContext();

export const CityDataProvider= ({children})=>{   
    const [cityData, setCityData]= useState();
    const [city, setCity]=useState();
    const [currentData, setCurrentData]= useState();
    const values = {
        city,
        setCity,
        cityData,
        setCityData,
       }

       const getCityData= async (city)=> { 
        const key= process.env.REACT_APP_WEATHER_DATA;
    
          
              const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
             setCityData(data)
            }  
            
            useEffect (()=>{
            city &&  getCityData(city)
            },[city])
            console.log(cityData);
        return <CityDataContext.Provider value={values} >{children}</CityDataContext.Provider>
}

export const UseCityData=()=>useContext(CityDataContext);