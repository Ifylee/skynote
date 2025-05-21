import React, { useState, useEffect } from 'react';
import dayjs from '../utils/dayjsConfig';
import SearchForm from './components/SearchForm';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import Forecast from './components/Forecast';
import SearchHistory from './components/SearchHistory';

const weatherAPIBaseURL = "https://api.openweathermap.org";
const weatherAPIKey = "4e21a631be36d521da226436846910ea";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [searchHistory, setSearchHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("weatherHistory")) || [];
  });

  const fetchCoordinates = async (search) => {
    try {
      const res = await fetch(`${weatherAPIBaseURL}/geo/1.0/direct?q=${search}&appid=${weatherAPIKey}`);
      const data = await res.json();

      if (!data[0]) {
        alert("City not found");
        return;
      }

      appendSearchHistory(search);
      fetchWeather(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchWeather = async (location) => {
    const { lat, lon, name } = location;
    const apiURL = `${weatherAPIBaseURL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherAPIKey}`;

    try {
      const res = await fetch(apiURL);
      const data = await res.json();

      setCurrentWeather({ city: name, ...data.list[0] });
      setForecast(data.list);
    } catch (err) {
      console.error(err);
    }
  };

  const appendSearchHistory = (search) => {
    if (!searchHistory.includes(search)) {
      const updatedHistory = [...searchHistory, search];
      setSearchHistory(updatedHistory);
      localStorage.setItem("weatherHistory", JSON.stringify(updatedHistory));
    }
  };

  return (
    <div className="container mt-4">
      <SearchForm onSearch={fetchCoordinates} />
      <SearchHistory history={searchHistory} onSearch={fetchCoordinates} />
      {currentWeather && <CurrentWeatherCard data={currentWeather} />}
      {forecast.length > 0 && <Forecast data={forecast} />}
    </div>
  );
}

export default App;

