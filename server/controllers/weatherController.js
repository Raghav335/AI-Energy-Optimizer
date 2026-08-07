import axios from "axios";

export const getWeather = async (req, res) => {
  try {
    const city = req.params.city;

    const apiKey = process.env.WEATHER_API_KEY;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    res.json({
      success: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      description: response.data.weather[0].description,
    });

  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: error.response?.data?.message || error.message,
    });
  }
};