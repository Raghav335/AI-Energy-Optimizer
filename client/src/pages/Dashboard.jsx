import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  MapPin,
  CalendarDays,
  Activity,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import LoadChart from "../components/LoadChart";
import WeatherCard from "../components/WeatherCard";
import AlertCard from "../components/AlertCard";
import RecommendationCard from "../components/RecommendationCard";

import useWeather from "../hooks/useWeather";
import useAnalytics from "../hooks/useAnalytics";

function Dashboard() {

  const weather = useWeather("Delhi");
  const analytics = useAnalytics();

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {

    const updateClock = () => {
      setCurrentTime(
        new Date().toLocaleString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

<div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
  <Sidebar />

  <main className="lg:ml-72 min-h-screen p-4 md:p-8 transition-all duration-300"></main>

<Sidebar />

<div className="flex-1 lg:ml-72 overflow-y-auto p-4 md:p-8">

{/* ---------------- HEADER ---------------- */}

<div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6">

<div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">

<div>

<h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">

Welcome Back, Raghav 👋

</h1>

<p className="text-gray-500 mt-3 flex items-center gap-2">

<CalendarDays size={18} />

{currentTime}

</p>

</div>

<div className="flex flex-wrap items-center gap-4">

{/* Search */}

<div className="relative">

<Search
size={18}
className="absolute left-4 top-3.5 text-gray-400"
/>

<input
type="text"
placeholder="Search..."
className="pl-11 pr-4 py-3 rounded-xl bg-gray-100 focus:ring-2 focus:ring-blue-500 outline-none w-64"
/>

</div>

{/* Location */}

<div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-3 rounded-xl font-semibold">

<MapPin size={18} />

Delhi

</div>

{/* Notification */}

<button className="relative bg-white shadow-lg rounded-xl p-3 hover:bg-gray-100 transition">

<Bell size={22} />

<span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

</button>

{/* Profile */}

<div className="flex items-center gap-3 bg-white rounded-xl shadow-lg px-4 py-2">

<div className="w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold">

R

</div>

<div>

<h3 className="font-bold">

Raghav Gupta

</h3>

<p className="text-xs text-gray-500">

Administrator

</p>

</div>

</div>

</div>

</div>

</div>

{/* ---------- STATUS BAR ---------- */}

<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

<div className="bg-green-100 rounded-2xl p-5">

<p className="text-gray-500">

Grid Status

</p>

<h2 className="text-2xl font-bold text-green-600">

🟢 Online

</h2>

</div>

<div className="bg-blue-100 rounded-2xl p-5">

<p className="text-gray-500">

AI Accuracy

</p>

<h2 className="text-2xl font-bold text-blue-700">

98%

</h2>

</div>

<div className="bg-yellow-100 rounded-2xl p-5">

<p className="text-gray-500">

Weather

</p>

<h2 className="text-2xl font-bold text-yellow-600">

Sunny

</h2>

</div>

<div className="bg-purple-100 rounded-2xl p-5">

<p className="text-gray-500">

Monitoring

</p>

<h2 className="text-2xl font-bold text-purple-700 flex items-center gap-2">

<Activity size={22}/>

Live

</h2>

</div>

</div>

{/* ---------------- DASHBOARD CARDS ---------------- */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

<DashboardCard
title="⚡ Current Load"
value={
analytics
? `${analytics.currentLoad} MW`
: "Loading..."
}
color="text-blue-600"
/>

<DashboardCard
title="🤖 AI Prediction"
value={
analytics
? `${analytics.predictedLoad} MW`
: "Loading..."
}
color="text-green-600"
/>

<DashboardCard
title="🌡 Temperature"
value={
weather
? `${weather.temperature} °C`
: "Loading..."
}
color="text-orange-500"
/>

<DashboardCard
title="💧 Humidity"
value={
weather
? `${weather.humidity}%`
: "Loading..."
}
color="text-cyan-600"
/>

<DashboardCard
title="☀ Solar Output"
value={
analytics
? `${analytics.solarOutput} MW`
: "Loading..."
}
color="text-yellow-500"
/>

<DashboardCard
title="⚡ Grid Frequency"
value={
analytics
? `${analytics.gridFrequency} Hz`
: "Loading..."
}
color="text-purple-600"
/>

</div>{/* ================= CHART SECTION ================= */}

      <div className="mt-10">

        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

            <div>

              <h2 className="text-2xl font-bold text-gray-800">
                📈 Live Power Analytics
              </h2>

              <p className="text-gray-500 mt-1">
                AI powered real-time smart grid monitoring.
              </p>

            </div>

            <div className="mt-4 md:mt-0">

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

                🟢 Live Updating

              </span>

            </div>

          </div>

          <LoadChart />

        </div>

      </div>

      {/* ================= WIDGETS ================= */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

        <WeatherCard weather={weather} />

        <AlertCard power={analytics} />

        <RecommendationCard
          weather={weather}
          power={analytics}
        />

      </div>

      {/* ================= FOOTER ================= */}

      <div className="mt-10">

        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl text-white p-8 shadow-2xl">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

            <div>

              <h2 className="text-3xl font-bold">
                ⚡ AI Energy  Optimizer
              </h2>

              <p className="text-blue-100 mt-2">
                Smart Energy Management Dashboard powered by Artificial Intelligence.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">

                <h3 className="text-3xl font-bold">
                  98%
                </h3>

                <p className="text-sm">
                  AI Accuracy
                </p>

              </div>

              <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">

                <h3 className="text-3xl font-bold">
                  24/7
                </h3>

                <p className="text-sm">
                  Monitoring
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

  );
}

export default Dashboard;