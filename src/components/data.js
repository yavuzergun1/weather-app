import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { usePosition } from 'use-position'



function Data() {
    const [weather, setWeather] = useState([]);
    const {latitude, longitude}= usePosition();
    console.log(latitude, longitude);
    useEffect(() => {
      axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude={part}&appid=1ac2c05c20ed62694dfdbe712be26cae`)
        .then(response => setWeather(response.data))
        .catch(error => console.log({ error }));
    }, [latitude]);
   console.log(weather);
    
  return (
    <div>
    
    </div>
  )
}

export default Data