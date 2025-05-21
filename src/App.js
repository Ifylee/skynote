import { useState } from 'react';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';
import WeatherResult from './components/WeatherResult';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const apiKey = '4e21a631be36d521da226436846910ea';
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error('City not found');
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      alert(err.message);
      setWeather(null);
    }
  };

  return (
    <div id="wrapper">
      <Header />
      <WeatherForm onSearch={fetchWeather} />
      <WeatherResult weather={weather} />
    </div>
  );
}

export default App;
