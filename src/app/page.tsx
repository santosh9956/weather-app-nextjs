// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import CitySearch from "../components/CitySearch";
import CurrentWeather from "../components/CurrentWeather";
import ForecastCard from "../components/ForecastCard";
import TemperatureToggle from "../components/TemperatureToggle";

const Home = () => {
  const [city, setCity] = useState<string>("New York");
  const [weatherData, setWeatherData] = useState<any>(null); // Define a more specific type based on your data
  const [unit, setUnit] = useState<string>("metric");
  const [forecast, setForecast] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async () => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    try {
      // Fetch current weather data
      const currentResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      if (!currentResponse.ok) {
        const errorData = await currentResponse.json();
        throw new Error(errorData.error.message);
      }
      const currentData = await currentResponse.json();
      setWeatherData(currentData);

      // Fetch forecast data
      const forecastResponse = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`
      );
      if (!forecastResponse.ok) {
        const errorData = await forecastResponse.json();
        throw new Error(errorData.error.message);
      }
      const forecastData = await forecastResponse.json();
      setForecast(forecastData.forecast.forecastday);

      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city, unit]);

  return (
    <div className="max-w-lg mx-auto text-center p-4">
      <CitySearch setCity={setCity} />
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <CurrentWeather data={weatherData} unit={unit} />
          <TemperatureToggle unit={unit} setUnit={setUnit} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {forecast.map((day, index) => (
              <ForecastCard unit={unit} key={index} day={day} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
