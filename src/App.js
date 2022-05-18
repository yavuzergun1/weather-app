import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { usePosition } from 'use-position'

function App() {

  const [weather, setweather] = useState([]);
   
    const {latitude, longitude}= usePosition();
    console.log(latitude, longitude);
 
    useEffect(()=>{
      axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=1ac2c05c20ed62694dfdbe712be26cae`)
      .then((res)=> (setweather(res.data)))
      .catch((e)=>console.log(e))
     
      console.log(weather);
      
      }, [latitude])
  


  return (
    <div>
    {JSON.stringify(weather)}
    </div>
  )
}


export default App;
