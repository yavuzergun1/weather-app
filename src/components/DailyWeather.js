import React from 'react';
import {UseData} from '../context/DataContext'
import moment from 'moment';

function DailyWeather() {
    const{dailyWeather}= UseData();
  return (
    <div>
         {/* {dailyWeather[0].temp.day} */}
         </div>
  )
}

export default DailyWeather