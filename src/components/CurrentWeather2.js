import React from 'react'
import {UseData} from '../context/DataContext'
import moment from 'moment';

function CurrentWeather2() {
    const {weather}= UseData();

  return (
    <div>
        {weather.timezone}
        <p className="day">Day: {moment().format('dddd')}</p>
        <p className="day">{moment().add(3, 'days').calendar()}</p>
        {/* <p>{moment().add(10, 'days')}</p> */}
    </div>
  )
}

export default CurrentWeather2