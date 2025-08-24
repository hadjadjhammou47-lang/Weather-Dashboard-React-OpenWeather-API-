import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="mt-6 p-6 bg-white shadow-lg rounded-2xl text-center w-80">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p className="text-gray-500">{weather.weather[0].description}</p>
      <p className="text-3xl font-semibold">{weather.main.temp}°C</p>
      <div className="flex justify-around mt-4">
        <div>
          <p className="font-bold">{weather.main.humidity}%</p>
          <p className="text-gray-500">Humidity</p>
        </div>
        <div>
          <p className="font-bold">{weather.wind.speed} m/s</p>
          <p className="text-gray-500">Wind</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
