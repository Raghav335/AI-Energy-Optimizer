import axios from "axios";

const API = "https://ai-energy-optimizer-backend.onrender.com/api/weather";


export const getWeather = async (city = "Delhi") => {
  const res = await axios.get(`${API}/${city}`);
  return res.data;
};