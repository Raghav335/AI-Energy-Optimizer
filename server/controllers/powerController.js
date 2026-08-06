export const getPowerData = (req, res) => {

  const currentLoad = Math.floor(Math.random() * 2000) + 7000;

  const predictedLoad = currentLoad + Math.floor(Math.random() * 300);

  const status =
    predictedLoad > 8500 ? "High Demand" : "Normal";

  res.json({
    success: true,
    currentLoad,
    predictedLoad,
    status,
  });
};