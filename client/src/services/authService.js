import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register
export const register = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  );

  return response.data;
};

// Login
export const login = async (userData) => {
  const response = await axios.post(
    `${API_URL}/login`,
    userData
  );

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );
  }

  return response;
};

// Logout
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Current User
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};