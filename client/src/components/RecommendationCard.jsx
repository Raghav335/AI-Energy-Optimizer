import {
  Bot,
  Lightbulb,
  BatteryCharging,
  Sparkles,
  TrendingUp,
  Thermometer,
} from "lucide-react";

function RecommendationCard({ power, weather }) {
  const currentLoad = Number(power?.currentLoad || 0);
  const predictedLoad = Number(power?.predictedLoad || 0);
  const temperature = Number(weather?.temperature || 0);

  let recommendation = "Grid Operating Normally";
  let action = "Continue real-time energy monitoring.";
  let color = "text-green-600";
  let bg = "bg-green-50";
  let icon = <Lightbulb className="text-green-600" />;

  // AI prediction is significantly higher than current load
  if (
    predictedLoad > currentLoad &&
    predictedLoad - currentLoad >= 500
  ) {
    recommendation = "High Demand Expected";
    action =
      "AI predicts a significant increase in energy demand. Consider reducing non-essential loads.";
    color = "text-red-600";
    bg = "bg-red-50";
    icon = <TrendingUp className="text-red-600" />;
  }

  // High current load
  else if (currentLoad > 9000) {
    recommendation = "Shift Energy Usage";
    action =
      "Current demand is high. Move heavy energy consumption to off-peak hours.";
    color = "text-orange-600";
    bg = "bg-orange-50";
    icon = <BatteryCharging className="text-orange-600" />;
  }

  // High temperature
  else if (temperature >= 35) {
    recommendation = "High Temperature Alert";
    action =
      "High temperature may increase cooling demand. Optimize AC and cooling systems.";
    color = "text-yellow-600";
    bg = "bg-yellow-50";
    icon = <Thermometer className="text-yellow-600" />;
  }

  // Moderate AI increase
  else if (predictedLoad > currentLoad) {
    recommendation = "Optimize Energy Usage";
    action =
      "AI predicts a moderate increase in demand. Consider using energy-efficient appliances.";
    color = "text-blue-600";
    bg = "bg-blue-50";
    icon = <Sparkles className="text-blue-600" />;
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

          {icon}

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
          🤖 AI analyzes demand and weather conditions to provide
          real-time energy recommendations.
        </p>

      </div>

    </div>
  );
}

export default RecommendationCard;