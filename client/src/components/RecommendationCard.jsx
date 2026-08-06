import {
  Bot,
  Lightbulb,
  BatteryCharging,
  Sparkles,
} from "lucide-react";

function RecommendationCard({ power, weather }) {
  let recommendation = "Grid operating normally.";
  let action = "Continue real-time monitoring.";
  let color = "text-green-600";
  let bg = "bg-green-50";

  if (power?.currentLoad > 8500) {
    recommendation = "Increase Solar Generation";
    action = "Use available renewable energy to reduce grid load.";
    color = "text-yellow-600";
    bg = "bg-yellow-50";
  }

  if (power?.currentLoad > 9000) {
    recommendation = "Shift Industrial Load";
    action = "Move heavy industrial consumption to off-peak hours.";
    color = "text-red-600";
    bg = "bg-red-50";
  }

  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            AI Assistant
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Smart Energy Recommendation
          </p>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg">

          <Bot className="text-white" size={30} />

        </div>

      </div>

      {/* Recommendation */}

      <div className={`${bg} rounded-2xl p-5 mt-6`}>

        <div className="flex items-center gap-2">

          <Lightbulb className={color} />

          <h3 className={`text-xl font-bold ${color}`}>
            {recommendation}
          </h3>

        </div>

        <p className="text-gray-600 mt-3">
          {action}
        </p>

      </div>

      {/* Insights */}

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-blue-50 rounded-2xl p-4">

          <BatteryCharging className="text-blue-600 mb-2" />

          <p className="text-sm text-gray-500">
            AI Confidence
          </p>

          <h3 className="font-bold text-blue-600">
            98%
          </h3>

        </div>

        <div className="bg-purple-50 rounded-2xl p-4">

          <Sparkles className="text-purple-600 mb-2" />

          <p className="text-sm text-gray-500">
            Weather
          </p>

          <h3 className="font-bold text-purple-600">
            {weather?.temperature ?? "--"}°C
          </h3>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 border-t pt-4">

        <p className="text-sm text-gray-500">
          🤖 AI analyzes weather, demand, and renewable energy to provide real-time recommendations.
        </p>

      </div>

    </div>
  );
}

export default RecommendationCard;