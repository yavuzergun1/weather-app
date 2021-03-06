import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { usePosition } from "use-position";
import { UseCityData } from "../context/CityDataContext";
import Container from "../components/Container";

function Data() {
  const [cityLat, setCityLat] = useState();
  const [cityLon, setCityLon] = useState();
  const { cityMain, setCityMain } = UseCityData();
  const { currentData, setCurrentData } = UseCityData();
  const { currentDataWeather, setCurrentDataWeather } = UseCityData();
  const { weeklyData, setWeeklyData } = UseCityData();
  const { cityData, setCityData } = UseCityData();
  const { city, setCity } = UseCityData();
  const { isDay, setIsDay } = UseCityData();
  const { latitude, longitude } = usePosition();

  const getData = async () => {
    const key = process.env.REACT_APP_WEATHER_DATA;
    if (city) {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&exclude="daily"&appid=${key}`
        );
        setCityData(data);
        setCityLat(data.coord.lat);
        setCityLon(data.coord.lon);
        setCityMain(data.weather[0].main);
        console.log(cityData);
      } catch (err) {
        alert("Please Enter a Valid City Name");
      }
    }

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          cityLat === undefined ? latitude : cityLat
        }&lon=${
          cityLon === undefined ? longitude : cityLon
        }&units=metric&appid=${key}`
      );
      setCurrentData(data);
      setCurrentDataWeather(data.weather[0].main);
      setIsDay(data.weather[0].icon.indexOf("d"));
      console.log(currentData);
    } catch (err) {
      console.log("currentData problem!");
    }

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${
          cityLat === undefined ? latitude : cityLat
        }&lon=${
          cityLon === undefined ? longitude : cityLon
        }&units=metric&appid=${key}`
      );
      setWeeklyData(data);
      console.log(weeklyData);
    } catch (err) {
      console.log("weeklyData problem!");
    }
  };

  useEffect(() => {
    latitude && getData();
  }, [latitude, city, cityLat]);

  return <div></div>;
}

export default Data;
