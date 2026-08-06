import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CloudSun,
  BarChart3,
  FileText,
  Settings,
  LogOut,
  Zap,
  Menu,
  X,
  ShieldCheck,
} from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Weather",
      path: "/weather",
      icon: <CloudSun size={20} />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FileText size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <>
      {/* Mobile Header */}

      <div className="lg:hidden flex items-center justify-between bg-slate-950 text-white px-4 py-4 shadow-xl">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">

            <Zap size={22} className="text-white" />

          </div>

          <div>

            <h2 className="font-bold text-lg">
              AI Energy
            </h2>

            <p className="text-xs text-slate-400">
              Optimizer
            </p>

          </div>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-slate-800"
        >
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>

      </div>

      {/* Overlay */}

      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed top-0 left-0 z-40
        h-screen w-72
        bg-gradient-to-b
        from-slate-950
        via-slate-900
        to-slate-950
        border-r border-slate-800
        shadow-2xl
        flex flex-col
        transform transition-all duration-300
        ${
          open
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >

        {/* Scrollable Area */}

        <div className="flex-1 overflow-y-auto">

          {/* Logo */}

          <div className="px-6 py-7 border-b border-slate-800">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-xl">

                <Zap size={30} className="text-white"/>

              </div>

              <div>

                <h1 className="text-2xl font-extrabold text-white">

                  AI Energy

                </h1>

                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                  Optimizer

                </h2>

                <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">

                  Smart Energy Dashboard

                </p>

              </div>

            </div>

          </div>{/* ================= PROFILE ================= */}

          <div className="p-5">

            <div className="rounded-2xl bg-slate-800/60 border border-slate-700 p-4">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-lg font-bold text-white shadow-lg">

                  R

                </div>

                <div className="flex-1">

                  <h2 className="font-bold text-white">
                    Raghav Gupta
                  </h2>

                  <p className="text-xs text-slate-400">
                    Administrator
                  </p>

                </div>

              </div>

              <div className="mt-3 flex items-center gap-2">

                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>

                <span className="text-xs text-green-400">
                  System Online
                </span>

              </div>

            </div>

          </div>

          {/* ================= MENU ================= */}

          <nav className="px-4 pb-4 space-y-2">

            {menu.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >

                <div className="group-hover:scale-110 transition-transform">

                  {item.icon}

                </div>

                <span className="font-medium">

                  {item.name}

                </span>

              </NavLink>

            ))}

          </nav>{/* ================= AI STATUS ================= */}

          <div className="px-4 mt-2 mb-5">

            <div className="rounded-2xl bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 p-5 shadow-xl">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center">

                  <ShieldCheck size={24} className="text-white" />

                </div>

                <div>

                  <h3 className="font-bold text-white">
                    AI Engine
                  </h3>

                  <p className="text-xs text-blue-100">
                    Smart • Secure • Efficient
                  </p>

                </div>

              </div>

              {/* Progress */}

              <div className="mt-5">

                <div className="flex justify-between text-xs text-white mb-1">

                  <span>Prediction Accuracy</span>

                  <span>98%</span>

                </div>

                <div className="h-2 rounded-full bg-white/20 overflow-hidden">

                  <div className="h-full w-[98%] rounded-full bg-white"></div>

                </div>

              </div>

              <div className="mt-4">

                <div className="flex justify-between text-xs text-white mb-1">

                  <span>System Health</span>

                  <span>100%</span>

                </div>

                <div className="h-2 rounded-full bg-white/20 overflow-hidden">

                  <div className="h-full w-full rounded-full bg-green-300"></div>

                </div>

              </div>

              {/* Live Status */}

              <div className="mt-5 rounded-xl bg-white/10 p-3">

                <div className="flex items-center justify-between">

                  <span className="text-sm text-white">
                    Live Monitoring
                  </span>

                  <span className="flex items-center gap-2 text-green-300 text-sm">

                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>

                    Active

                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>{/* ================= FOOTER ================= */}

        <div className="border-t border-slate-800 p-4 bg-slate-950 shrink-0">

          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-500 to-red-700 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:from-red-600 hover:to-red-800"
          >
            <LogOut size={18} />
            Logout
          </button>

          <div className="mt-5 rounded-xl bg-slate-900 border border-slate-800 p-4 text-center">

            <h3 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-lg font-bold text-transparent">
              Raghav Gupta
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Full Stack Developer
            </p>

            <div className="mt-3 flex items-center justify-center gap-2">

              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

              <span className="text-xs text-green-400">
                AI Energy Optimizer v1.0
              </span>

            </div>

          </div>

        </div>

      </aside>

    </>
  );
}

export default Sidebar;