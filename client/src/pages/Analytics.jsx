import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  CalendarDays,
  Activity,
  BarChart3,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import AnalyticsCard from "../components/AnalyticsCard";
import AnalyticsChart from "../components/AnalyticsChart";
import AIInsightCard from "../components/AIInsightCard";

import useAnalytics from "../hooks/useAnalytics";

function Analytics() {

  const analytics = useAnalytics();

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {

    const timer = setInterval(() => {

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

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

<div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

<Sidebar />

<main className="lg:ml-72 p-4 md:p-8">

{/* ================= HEADER ================= */}

<div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-800 p-6">

<div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">

<div>

<h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">

📊 Analytics Dashboard

</h1>

<p className="text-gray-500 dark:text-slate-400 mt-3 flex items-center gap-2">

<CalendarDays size={18} />

{currentTime}

</p>

</div>

<div className="flex flex-wrap gap-4 items-center">

<div className="relative">

<Search
size={18}
className="absolute left-4 top-3.5 text-gray-400"
/>

<input
type="text"
placeholder="Search Analytics..."
className="pl-11 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 outline-none w-64"
/>

</div>

<button className="relative bg-white dark:bg-slate-800 shadow-lg rounded-xl p-3">

<Bell size={20} />

<span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>

</button>

</div>

</div>

</div>

{/* ================= STATUS ================= */}

<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

<div className="bg-green-100 rounded-2xl p-5">

<p className="text-gray-500">
AI Status
</p>

<h2 className="text-2xl font-bold text-green-600">

🟢 Active

</h2>

</div>

<div className="bg-blue-100 rounded-2xl p-5">

<p className="text-gray-500">

Prediction Accuracy

</p>

<h2 className="text-2xl font-bold text-blue-700">

98%

</h2>

</div>

<div className="bg-yellow-100 rounded-2xl p-5">

<p className="text-gray-500">

System

</p>

<h2 className="text-2xl font-bold text-yellow-600">

Healthy

</h2>

</div>

<div className="bg-purple-100 rounded-2xl p-5">

<p className="text-gray-500">

Monitoring

</p>

<h2 className="text-2xl font-bold text-purple-700 flex items-center gap-2">

<Activity size={20}/>

Live

</h2>

</div>

</div>

{/* ================= ANALYTICS CARDS ================= */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

<AnalyticsCard
title="⚡ Current Load"
value={analytics ? `${analytics.currentLoad} MW` : "Loading..."}
color="text-blue-600"
icon="⚡"
/>

<AnalyticsCard
title="🤖 AI Prediction"
value={analytics ? `${analytics.predictedLoad} MW` : "Loading..."}
color="text-green-600"
icon="🤖"
/>

<AnalyticsCard
title="☀ Solar Output"
value={analytics ? `${analytics.solarOutput} MW` : "Loading..."}
color="text-yellow-500"
icon="☀"
/>

<AnalyticsCard
title="⚡ Grid Frequency"
value={analytics ? `${analytics.gridFrequency} Hz` : "Loading..."}
color="text-purple-600"
icon="⚡"
/>

</div>{/* ================= CHART SECTION ================= */}

<div className="mt-10">

  <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-800 p-6">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

      <div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">

          <BarChart3 className="text-blue-600" />

          Live Grid Analytics

        </h2>

        <p className="text-gray-500 dark:text-slate-400 mt-1">

          AI Powered Real-time Energy Monitoring

        </p>

      </div>

      <div className="mt-4 md:mt-0">

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

          🟢 Live Updating

        </span>

      </div>

    </div>

    <AnalyticsChart />

  </div>

</div>

{/* ================= AI INSIGHTS ================= */}

<div className="mt-10">

  <AIInsightCard analytics={analytics} />

</div>

{/* ================= FOOTER ================= */}

<div className="mt-10">

  <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 text-white p-8 shadow-2xl">

    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

      <div>

        <h2 className="text-3xl font-bold">

          ⚡ AI Energy Optimizer

        </h2>

        <p className="text-blue-100 mt-2">

          Advanced Analytics powered by Artificial Intelligence.

        </p>

      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">

          <h3 className="text-3xl font-bold">

            98%

          </h3>

          <p className="text-sm">

            Accuracy

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

</main>

</div>

  );
}

export default Analytics;