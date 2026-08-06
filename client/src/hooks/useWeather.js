import { useEffect, useState } from "react";
import { getWeather } from "../services/weatherService";

export default function useWeather(city = "Delhi") {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather(city).then(setWeather);
  }, [city]);

  return weather;
}