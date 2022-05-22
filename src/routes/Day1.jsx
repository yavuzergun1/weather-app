import React from 'react';
import "../App.css";
import { UseData } from '../context/DataContext'

function Day1() {
  const {weather, weatherCondition, isDay}= UseData();
  console.log(weather);
  return (
    <div className='main-container clear-day'>
      dfgdfg
    </div>
  )
}

export default Day1