import axios from "axios";

const API = "https://ai-energy-optimizer-backend.onrender.com/api/analytics";

export const getAnalytics = async () => {
  const res = await axios.get(API);
  return res.data;
};