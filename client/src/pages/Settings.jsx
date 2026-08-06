import { useState, useEffect } from "react";
import {
  Bell,
  Search,
  CalendarDays,
  Settings as SettingsIcon,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import SettingsCard from "../components/SettingsCard";

function Settings() {

  const [currentTime, setCurrentTime] = useState("");

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const [notification, setNotification] = useState(true);

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);

  }, [darkMode]);

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

<h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white flex items-center gap-3">

<SettingsIcon className="text-blue-600"/>

Settings

</h1>

<p className="text-gray-500 dark:text-slate-400 mt-3 flex items-center gap-2">

<CalendarDays size={18}/>

{currentTime}

</p>

</div>

<div className="flex items-center gap-4 flex-wrap">

<div className="relative">

<Search
size={18}
className="absolute left-4 top-3.5 text-gray-400"
/>

<input
type="text"
placeholder="Search Settings..."
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

{/* ================= PROFILE ================= */}

<div className="mt-8">

<SettingsCard title="👤 Profile">

<div className="space-y-3">

<p className="text-gray-700 dark:text-gray-200">

<strong>Name :</strong> Raghav Gupta

</p>

<p className="text-gray-700 dark:text-gray-200">

<strong>Email :</strong> raghavgupta805288@gmail.com

</p>

<p className="text-green-600 font-medium">

🟢 Administrator

</p>

</div>

</SettingsCard>

</div>

{/* ================= APPEARANCE ================= */}

<div className="mt-6">

<SettingsCard title="🌙 Appearance">

<div className="flex items-center justify-between">

<span className="text-gray-700 dark:text-gray-200 font-medium">

Dark Mode

</span>

<label className="relative inline-flex items-center cursor-pointer">

<input
type="checkbox"
className="sr-only peer"
checked={darkMode}
onChange={() => setDarkMode(!darkMode)}
/>

<div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition"></div>

<div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-7"></div>

</label>

</div>

</SettingsCard>

</div>{/* ================= NOTIFICATIONS ================= */}

<div className="mt-6">

  <SettingsCard title="🔔 Notifications">

    <div className="flex items-center justify-between">

      <span className="text-gray-700 dark:text-gray-200 font-medium">
        Enable Notifications
      </span>

      <label className="relative inline-flex items-center cursor-pointer">

        <input
          type="checkbox"
          className="sr-only peer"
          checked={notification}
          onChange={() => setNotification(!notification)}
        />

        <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>

        <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-7"></div>

      </label>

    </div>

    <p className="text-sm text-gray-500 dark:text-slate-400 mt-3">
      Receive alerts, AI recommendations and system updates.
    </p>

  </SettingsCard>

</div>

{/* ================= SECURITY ================= */}

<div className="mt-6">

  <SettingsCard title="🔒 Security">

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      <div>

        <h3 className="font-semibold text-gray-800 dark:text-white">
          Password & Account
        </h3>

        <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">
          Update your password regularly to keep your account secure.
        </p>

      </div>

      <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 py-3 rounded-xl transition shadow-lg">
        Change Password
      </button>

    </div>

  </SettingsCard>

</div>

{/* ================= SAVE SETTINGS ================= */}

<div className="mt-8 flex justify-end">

  <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-xl shadow-xl font-semibold transition">
    💾 Save Settings
  </button>

</div>

{/* ================= FOOTER ================= */}

<div className="mt-10">

  <div className="rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 text-white p-8 shadow-2xl">

    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

      <div>

        <h2 className="text-3xl font-bold">
          ⚙️ AI Energy Optimizer
        </h2>

        <p className="text-blue-100 mt-2">
          Customize your experience and manage your preferences securely.
        </p>

      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">

          <h3 className="text-3xl font-bold">
            🔒
          </h3>

          <p className="text-sm">
            Secure
          </p>

        </div>

        <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">

          <h3 className="text-3xl font-bold">
            🌙
          </h3>

          <p className="text-sm">
            Dark Mode
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

export default Settings;