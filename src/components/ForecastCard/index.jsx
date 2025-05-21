import React from 'react';
import dayjs from 'dayjs';

function ForecastCard({ data }) {
  const { dt_txt, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <div className="col-md five-day-card">
      <div className="card bg-dark text-white mb-3">
        <div className="card-body">
          <h5 className="card-title">{dayjs(dt_txt).format("M/D/YYYY")}</h5>
          <img src={iconUrl} alt={weather[0].description || "No description"} />
          <p className="card-text">Temperature🌡️: {main.temp} °F</p>
          <p className="card-text">Wind༄: {wind.speed} MPH</p>
          <p className="card-text">Humidity💦: {main.humidity} %</p>
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;
