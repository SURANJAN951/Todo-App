import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      const options = {
        method: "GET",
        url: "https://weather-api167.p.rapidapi.com/api/weather/forecast",
        params: {
          place: location,
          cnt: "1",
          units: "metric",
          type: "three_hour",
          mode: "json",
          lang: "en",
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": "weather-api167.p.rapidapi.com",
          Accept: "application/json",
        },
      };

      try {
        const response = await axios.request(options);
        console.log("Weather API Response:", response.data); // Debugging ke liye
        setWeatherData(response.data);
      } catch (error) {
        console.error("Weather API Error:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div>
      <h4>Weather in {weatherData?.city?.name}</h4>
      {weatherData?.list?.[0] ? (
        <p>
          🌥️ Condition: <strong>{weatherData.list[0].weather[0].description}</strong>
          🌡️ Temperature: <strong>{weatherData.list[0].main.temp}°C</strong> | 
        </p>
      ) : (
        <p>Temperature data not available</p>
      )}
    </div>
  );
};

export default Weather;
