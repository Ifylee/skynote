import React from 'react';
import dayjs from 'dayjs';
import ForecastCard from './ForecastCard';

function Forecast({ data }) {
  const startDate = dayjs().add(1, "day").startOf("day").unix();
  const endDate = dayjs().add(6, "day").startOf("day").unix();

  const filtered = data.filter(item => {
    const timestamp = item.dt;
    const hour = item.dt_txt.slice(11, 13);
    return timestamp >= startDate && timestamp < endDate && hour === "12";
  });

  return (
    <div className="row" id="forecast">
      <div className="col-12">
        <h3>5-Day Forecast:</h3>
      </div>
      {filtered.map((item, index) => (
        <ForecastCard key={index} data={item} />
      ))}
    </div>
  );
}

export default Forecast;
