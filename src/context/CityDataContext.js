import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CityDataContext= createContext();

export const CityDataProvider= ({children})=>{   
    const [cityData, setCityData]= useState();
    const [city, setCity]=useState();
    const [cityLat, setCityLat]= useState();
    const [cityLon, setCityLon]= useState();
    const [cityMain, setCityMain]= useState();
    const [weeklyData, setWeeklyData]= useState();
    const [currentData, setCurrentData]= useState();
    const [currentDataWeather, setCurrentDataWeather]= useState();
    const [timeZone, setTimeZone]= useState();
    const [currentMain, setCurrentMain]= useState();
    const [isDay, setIsDay]= useState();

    const values = {
        city,
        setCity,
        cityData,
        setCityData,
        cityLat,
        setCityLat,
        cityLon,
        setCityLon,
        cityMain, 
        setCityMain,
        currentData,
        setCurrentData,
        timeZone,
        setTimeZone,
        weeklyData,
        setWeeklyData,
        currentMain,
        setCurrentMain,
        isDay,
        setIsDay,
        currentDataWeather,
        setCurrentDataWeather,
       }

 

        return <CityDataContext.Provider value={values} >{children}</CityDataContext.Provider>
}

export const UseCityData=()=>useContext(CityDataContext);