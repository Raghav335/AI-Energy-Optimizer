import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  CalendarDays,
  Activity,
  FileText,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import ReportCard from "../components/ReportCard";
import ReportTable from "../components/ReportTable";
import DownloadButtons from "../components/DownloadButtons";

import useAnalytics from "../hooks/useAnalytics";

function Reports() {

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

    },1000);

    return () => clearInterval(timer);

  },[]);

  return (

<div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

<Sidebar />

<main className="lg:ml-72 p-4 md:p-8">

{/* ================= HEADER ================= */}

<div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-800 p-6">

<div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">

<div>

<h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">

📄 Reports Dashboard

</h1>

<p className="text-gray-500 dark:text-slate-400 mt-3 flex items-center gap-2">

<CalendarDays size={18}/>

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
placeholder="Search Reports..."
className="pl-11 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 outline-none w-64"
/>

</div>

<button className="relative bg-white dark:bg-slate-800 shadow-lg rounded-xl p-3">

<Bell size={20}/>

<span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>

</button>

</div>

</div>

</div>

{/* ================= STATUS ================= */}

<div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

<div className="bg-green-100 rounded-2xl p-5">

<p className="text-gray-500">

Reports

</p>

<h2 className="text-2xl font-bold text-green-600">

Ready

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

Downloads

</p>

<h2 className="text-2xl font-bold text-yellow-600">

PDF / CSV

</h2>

</div>

<div className="bg-purple-100 rounded-2xl p-5">

<p className="text-gray-500">

Status

</p>

<h2 className="text-2xl font-bold text-purple-700 flex items-center gap-2">

<Activity size={20}/>

Live

</h2>

</div>

</div>

{/* ================= REPORT CARDS ================= */}

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

<ReportCard
title="⚡ Current Load"
value={analytics ? `${analytics.currentLoad} MW` : "Loading..."}
color="text-blue-600"
icon="⚡"
/>

<ReportCard
title="🤖 AI Prediction"
value={analytics ? `${analytics.predictedLoad} MW` : "Loading..."}
color="text-green-600"
icon="🤖"
/>

<ReportCard
title="☀ Solar Output"
value={analytics ? `${analytics.solarOutput} MW` : "Loading..."}
color="text-yellow-500"
icon="☀"
/>

<ReportCard
title="⚡ Grid Frequency"
value={analytics ? `${analytics.gridFrequency} Hz` : "Loading..."}
color="text-purple-600"
icon="⚡"
/>

</div>{/* ================= REPORT TABLE ================= */}

<div className="mt-10">

  <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-800 p-6">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

      <div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">

          <FileText className="text-blue-600" />

          Energy Report Details

        </h2>

        <p className="text-gray-500 dark:text-slate-400 mt-1">

          Live AI generated smart energy reports.

        </p>

      </div>

      <span className="mt-4 md:mt-0 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">

        🟢 Updated Live

      </span>

    </div>

    <ReportTable analytics={analytics} />

  </div>

</div>

{/* ================= DOWNLOAD SECTION ================= */}

<div className="mt-8">

  <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-gray-200 dark:border-slate-800 p-6">

    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">

      ⬇️ Export Reports

    </h2>

    <p className="text-gray-500 dark:text-slate-400 mb-6">

      Download your AI-generated reports in different formats.

    </p>

    <DownloadButtons analytics={analytics} />

  </div>

</div>

{/* ================= FOOTER ================= */}

<div className="mt-10">

  <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 text-white p-8 shadow-2xl">

    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

      <div>

        <h2 className="text-3xl font-bold">

          📄 AI Energy Reports

        </h2>

        <p className="text-blue-100 mt-2">

          Professional reporting powered by Artificial Intelligence.

        </p>

      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">

          <h3 className="text-3xl font-bold">

            PDF

          </h3>

          <p className="text-sm">

            Export

          </p>

        </div>

        <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">

          <h3 className="text-3xl font-bold">

            CSV

          </h3>

          <p className="text-sm">

            Export

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

export default Reports;