import axios from "axios";

export const getPowerData = async (req, res) => {
  try {
    // Current load
    const currentLoad = Math.floor(Math.random() * 2000) + 7000;

    // Current hour
    const hour = new Date().getHours();

    // Temperature फिलहाल default 32°C
    const temperature = Number(req.query.temperature) || 32;

    // Render par deployed Python AI API
    const aiResponse = await axios.get(
      "https://ai-energy-optimizer-fjjy.onrender.com/predict",
      {
        params: {
          hour,
          temperature,
        },
      }
    );

    const predictedLoad = aiResponse.data.prediction;

    const status =
      predictedLoad > 8500 ? "High Demand" : "Normal";

    res.json({
      success: true,
      currentLoad,
      predictedLoad,
      status,
      temperature,
      hour,
    });

  } catch (error) {
    console.error("AI Prediction Error:", error.message);

    res.status(500).json({
      success: false,
      message: "AI prediction failed",
    });
  }
};