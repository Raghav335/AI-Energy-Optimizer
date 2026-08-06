import axios from "axios";

const API = "http://localhost:5000/api/analytics";

export const getAnalytics = async () => {
  const res = await axios.get(API);
  return res.data;
};