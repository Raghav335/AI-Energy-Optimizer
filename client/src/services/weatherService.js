import axios from "axios";

const API = "http://localhost:5000/api/weather";

export const getWeather = async (city = "Delhi") => {
  const res = await axios.get(`${API}/${city}`);
  return res.data;
};