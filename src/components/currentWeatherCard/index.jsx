import React from 'react';
import dayjs from 'dayjs';

function CurrentWeatherCard({ data }) {
  const { city, main, wind, weather } = data;
  const date = dayjs().format("M/D/YYYY");
  const iconUrl = `https://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <div className="card bg-light border-primary text-black mb-3">
      <div className="card-body">
        <h3 className="card-title">
          {city} ({date}) <img src={iconUrl} alt={weather[0].description} />
        </h3>
        <p className="card-text">Temperature : {main.temp} °F</p>
        <p className="card-text">Wind: {wind.speed} MPH</p>
        <p className="card-text">Humidity: {main.humidity} %</p>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
