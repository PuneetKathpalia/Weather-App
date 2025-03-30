import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import RecentSearches from "./components/RecentSearches";
import ForecastCard from "./components/ForecastCard";
import { useWeather } from "./hooks/useWeather";
import "./App.css";

const App = () => {
  const { weather, forecast, loading, error, fetchWeather, recentSearches } = useWeather();
  const [city, setCity] = useState("");
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply dark mode class and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Apply to <html>
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSearch = (city) => {
    setCity(city);
    fetchWeather(city);
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen w-full transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex justify-between items-center w-full max-w-md">
        <h1 className="weather-title">Weather Dashboard</h1>

        {/* Light Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle p-2 rounded-full transition bg-gray-300 dark:bg-gray-700 dark:text-white"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <SearchBar onSearch={handleSearch} />
      <RecentSearches searches={recentSearches} onSelect={handleSearch} />

      {loading && <Loader />}
      {error && <p className="text-red-500">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      {forecast && <ForecastCard forecast={forecast} />}
      
      <footer className="footer mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
  <p>Weather data provided by OpenWeatherMap</p>
  <div className="flex justify-center [&>*:not(:last-child)]:mr-10 mt-2">
    <a 
      href="https://linkedin.com/in/puneetkathpalia" 
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      LinkedIn
    </a>
    <a
      href="https://github.com/puneetkathpalia"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      GitHub
    </a>
  </div>
  <p className="mt-2">Created by Puneet</p>
</footer>
    </div>
  );
};

export default App;
