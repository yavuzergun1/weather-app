import React from 'react'
import {UseData} from '../context/DataContext'

function CurrentWeather2() {
    const {weather, setWeather}= UseData();

  return (
    <div>
        {weather.timezone}

    </div>
  )
}

export default CurrentWeather2