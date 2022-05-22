import React from 'react'
import { UseData } from '../context/DataContext'
function Deneme() {
    const {weather, weatherCondition, isDay}= UseData();
    console.log(weather);
  return (
    <div>
        
    </div>
  )
}

export default Deneme