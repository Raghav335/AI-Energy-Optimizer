import { useEffect, useState } from "react";
import axios from "axios";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

function AnalyticsChart() {
  const [data, setData] = useState([]);

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/analytics"
      );

      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setData((prev) => {
        const updated = [
          ...prev,
          {
            time,
            currentLoad: res.data.currentLoad,
            predictedLoad: res.data.predictedLoad,
            solarOutput: res.data.solarOutput,
          },
        ];

        if (updated.length > 10) {
          updated.shift();
        }

        return updated;
      });

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnalytics();

    const interval = setInterval(fetchAnalytics, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        📈 Live Analytics
      </h2>

      <ResponsiveContainer width="100%" height={400}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="time" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="currentLoad"
            stroke="#2563eb"
            strokeWidth={3}
            name="Current Load"
          />

          <Line
            type="monotone"
            dataKey="predictedLoad"
            stroke="#16a34a"
            strokeWidth={3}
            name="AI Prediction"
          />

          <Line
            type="monotone"
            dataKey="solarOutput"
            stroke="#f59e0b"
            strokeWidth={3}
            name="Solar Output"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AnalyticsChart;