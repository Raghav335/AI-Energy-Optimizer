import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import weatherRoutes from "./routes/weatherRoutes.js";
import powerRoutes from "./routes/powerRoutes.js";

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/power", powerRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Power Optimizer API Running 🚀",
  });
});

// 🔥 Real-Time Analytics API + AI Prediction
app.get("/api/analytics", async (req, res) => {
  try {
    const hour = new Date().getHours();
    const temperature = 32;

    const aiResponse = await axios.get(
  `${process.env.AI_API_URL}/predict`,
  {
    params: {
      hour,
      temperature,
    },
    timeout: 60000,
  }
);

const aiData = aiResponse.data;

    

    const currentLoad = Math.floor(Math.random() * 2500) + 6500;

    res.json({
      success: true,
      currentLoad,
      predictedLoad: aiData.prediction,
      solarOutput: Math.floor(Math.random() * 1200) + 1800,
      gridFrequency: (49.8 + Math.random() * 0.4).toFixed(2),
      voltage: Math.floor(Math.random() * 20) + 220,
      temperature,
      aiPrediction: aiData.prediction,
      timestamp: new Date()
    });

  } catch (error) {
    console.error("AI Analytics Error:", error.message);

    res.status(500).json({
      success: false,
      message: "AI analytics failed",
      error: error.message
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});