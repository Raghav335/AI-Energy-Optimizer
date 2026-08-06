import axios from "axios";

export const getWeather = async (req, res) => {
  try {
    const city = req.params.city;

    // City ko coordinates me convert karo
    const geo = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );

    if (!geo.data.results || geo.data.results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "City not found",
      });
    }

    const { latitude, longitude, name, country } = geo.data.results[0];

    // Real weather data
    const weather = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    res.json({
      success: true,
      city: name,
      country,
      temperature: weather.data.current.temperature_2m,
      humidity: weather.data.current.relative_humidity_2m,
      windSpeed: weather.data.current.wind_speed_10m,
    });

  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      success: false,
      message: "Weather fetch failed",
    });
  }
};