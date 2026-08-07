import { useEffect, useState } from "react";
import axios from "axios";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { Activity, TrendingUp } from "lucide-react";

function LoadChart() {
  const [chartData, setChartData] = useState([]);

  const fetchAnalytics = async () => {
    try {
     const res = await axios.get(
  "https://ai-energy-optimizer-backend.onrender.com/api/analytics"
);

      const time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setChartData((prev) => {
        const updated = [
          ...prev,
          {
            time,
            load: res.data.currentLoad,
            prediction: res.data.predictedLoad,
          },
        ];

        if (updated.length > 10) updated.shift();

        return updated;
      });

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAnalytics();

    const interval = setInterval(fetchAnalytics, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 p-6">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">

            <Activity className="text-blue-600" />

            Live Power Analytics

          </h2>

          <p className="text-gray-500 mt-1">

            Real-time Grid Monitoring

          </p>

        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">

          <TrendingUp size={18} />

          Live Update

        </div>

      </div>

      {/* Chart */}

      <ResponsiveContainer width="100%" height={400}>

        <LineChart data={chartData}>

          <CartesianGrid
            strokeDasharray="5 5"
            opacity={0.25}
          />

          <XAxis
            dataKey="time"
            tick={{ fontSize: 12 }}
          />

          <YAxis
            tick={{ fontSize: 12 }}
          />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="load"
            stroke="#2563eb"
            strokeWidth={4}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
            name="Current Load"
          />

          <Line
            type="monotone"
            dataKey="prediction"
            stroke="#10b981"
            strokeWidth={4}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
            name="AI Prediction"
          />

        </LineChart>

      </ResponsiveContainer>

      {/* Footer */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        <div className="bg-blue-50 rounded-2xl p-4">

          <p className="text-sm text-gray-500">
            Refresh
          </p>

          <h3 className="font-bold text-blue-600">
            Every 10s
          </h3>

        </div>

        <div className="bg-green-50 rounded-2xl p-4">

          <p className="text-sm text-gray-500">
            AI Status
          </p>

          <h3 className="font-bold text-green-600">
            Active
          </h3>

        </div>

        <div className="bg-yellow-50 rounded-2xl p-4">

          <p className="text-sm text-gray-500">
            Grid
          </p>

          <h3 className="font-bold text-yellow-600">
            Stable
          </h3>

        </div>

        <div className="bg-purple-50 rounded-2xl p-4">

          <p className="text-sm text-gray-500">
            Accuracy
          </p>

          <h3 className="font-bold text-purple-600">
            98%
          </h3>

        </div>

      </div>

    </div>
  );
}

export default LoadChart;