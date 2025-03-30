import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city);
      setCity(""); // Clear input after search
    }
  };

  return (
    <div className="search-container flex gap-2 items-center justify-center p-4 w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="search-input bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-5 py-3 w-full outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 text-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;