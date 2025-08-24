import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "YOUR_OPENWEATHER_API_KEY"; // 🔑 Replace with your API key

  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found!");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching weather data!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <h1 className="text-3xl font-bold mb-6">🌤 Weather Dashboard</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city"
          className="p-2 border rounded-lg"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={fetchWeather}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Search
        </button>
      </div>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
