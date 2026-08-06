import { TrendingUp, Activity } from "lucide-react";

function DashboardCard({ title, value, color }) {
  return (
    <div
      className="
      relative overflow-hidden
      bg-white/80 dark:bg-slate-800/80
      backdrop-blur-xl
      rounded-3xl
      border border-white/30 dark:border-slate-700
      shadow-xl
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all duration-300
      p-6"
    >
      {/* Background Glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>

      <div className="relative flex justify-between items-start">

        <div>

          <p className="text-sm font-medium text-gray-500 dark:text-gray-300">
            {title}
          </p>

          <h2 className={`text-4xl font-extrabold mt-3 ${color}`}>
            {value}
          </h2>

          <div className="flex items-center gap-2 mt-5">

            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full flex items-center gap-1">

              <TrendingUp size={14} />

              Live

            </span>

            <span className="text-gray-400 text-sm">
              Updated Now
            </span>

          </div>

        </div>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">

          <Activity className="text-white" size={30} />

        </div>

      </div>

      {/* Bottom Progress */}

      <div className="mt-6">

        <div className="flex justify-between text-xs text-gray-500">

          <span>Performance</span>

          <span>98%</span>

        </div>

        <div className="mt-2 h-2 rounded-full bg-gray-200 overflow-hidden">

          <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-green-400 to-blue-600"></div>

        </div>

      </div>

    </div>
  );
}

export default DashboardCard;