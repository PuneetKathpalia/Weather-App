import React from "react";

const ForecastCard = ({ forecast }) => {
  if (!forecast) return null;

  // Extract one forecast per day at noon (12:00 PM)
  const dailyForecasts = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
        5-Day Forecast
      </h2>
      <div className="flex flex-col gap-3">
        {dailyForecasts.map((day) => (
          <div
            key={day.dt}
            className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow transition-all"
          >
            <p className="font-medium text-gray-900 dark:text-white">
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
              className="w-12"
            />
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              {Math.round(day.main.temp)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
