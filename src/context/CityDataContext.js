import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const CityDataContext= createContext();

export const CityDataProvider= ({children})=>{   
    const [cityData, setCityData]= useState();
    const [city, setCity]=useState();
    const [cityLat, setCityLat]= useState();
    const [cityLon, setCityLon]= useState();
    const values = {
        city,
        setCity,
        cityData,
        setCityData,
        cityLat,
        setCityLat,
        cityLon,
        setCityLon
       }

 

        return <CityDataContext.Provider value={values} >{children}</CityDataContext.Provider>
}

export const UseCityData=()=>useContext(CityDataContext);