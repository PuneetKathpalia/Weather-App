import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null; 

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>
      
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      <p className="description">{weather.weather[0].description}</p>

      <div className="details">
        <div className="detail-item">
          <span>Humidity</span>
          <span>{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span>Wind Speed</span>
          <span>{weather.wind.speed} km/h</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;