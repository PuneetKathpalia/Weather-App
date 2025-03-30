import React from "react";

const WeatherCard = ({ weather }) => {
  if (!weather) return null; 

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80 mx-auto transition-all">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{weather.name}</h2>
      
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="mx-auto"
      />

      <p className="text-3xl font-semibold text-blue-600 dark:text-blue-400">
        {Math.round(weather.main.temp)}°C
      </p>
      <p className="text-gray-700 dark:text-gray-300 capitalize">
        {weather.weather[0].description}
      </p>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-col items-center">
          <span className="font-semibold">Humidity</span>
          <span>{weather.main.humidity}%</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">Wind Speed</span>
          <span>{weather.wind.speed} km/h</span>

        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
