import React from "react";

const ForecastCard = ({ forecast }) => {
  if (!forecast) return null;

  const dailyForecasts = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast-card">
      <h2>5-Day Forecast</h2>
      <div className="forecast-items">
        {dailyForecasts.map((day) => (
          <div key={day.dt} className="forecast-item">
            <p>
              {new Date(day.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
            />
            <p>{Math.round(day.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;