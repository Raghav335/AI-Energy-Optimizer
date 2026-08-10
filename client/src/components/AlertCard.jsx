import {
  ShieldCheck,
  AlertTriangle,
  Siren,
  TrendingUp,
} from "lucide-react";

function AlertCard({ power }) {
  const currentLoad = Number(power?.currentLoad || 0);
  const predictedLoad = Number(power?.predictedLoad || 0);

  let status = "Grid Stable";
  let color = "text-green-600";
  let bg = "bg-green-50";
  let border = "border-green-200";
  let icon = <ShieldCheck className="text-green-600" size={32} />;

  let message =
    "Power demand is normal. AI is continuously monitoring the smart grid.";

  // Critical current load
  if (currentLoad > 9000) {
    status = "Critical Load";
    color = "text-red-600";
    bg = "bg-red-50";
    border = "border-red-200";
    icon = <Siren className="text-red-600" size={32} />;

    message =
      "Peak energy demand detected. Immediate load balancing is recommended.";
  }

  // High predicted load
  else if (
    predictedLoad > currentLoad &&
    predictedLoad - currentLoad >= 500
  ) {
    status = "High Demand Expected";
    color = "text-orange-600";
    bg = "bg-orange-50";
    border = "border-orange-200";
    icon = <TrendingUp className="text-orange-600" size={32} />;

    message =
      "AI predicts a significant increase in energy demand. Consider reducing non-essential loads.";
  }

  // High current load
  else if (currentLoad > 8500) {
    status = "High Demand";
    color = "text-yellow-600";
    bg = "bg-yellow-50";
    border = "border-yellow-200";
    icon = <AlertTriangle className="text-yellow-600" size={32} />;

    message =
      "Electricity demand is increasing. Energy saving is recommended.";
  }

  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            AI Smart Alert
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Live Grid Monitoring
          </p>

        </div>

        {icon}

      </div>

      {/* Alert Status */}

      <div className={`${bg} ${border} border rounded-2xl p-5 mt-6`}>

        <h3 className={`text-2xl font-bold ${color}`}>
          {status}
        </h3>

        <p className="text-gray-600 mt-3">
          {message}
        </p>

      </div>

      {/* Energy Stats */}

      <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-blue-50 rounded-2xl p-4">

          <p className="text-sm text-gray-500">
            Current Load
          </p>

          <h3 className="font-bold text-blue-600">
            {currentLoad ? `${currentLoad} MW` : "--"}
          </h3>

        </div>

        <div className="bg-purple-50 rounded-2xl p-4">

          <p className="text-sm text-gray-500">
            AI Prediction
          </p>

          <h3 className="font-bold text-purple-600">
            {predictedLoad ? `${predictedLoad} MW` : "--"}
          </h3>

        </div>

      </div>

      {/* Monitoring */}

      <div className="mt-6 border-t pt-4">

        <p className="text-sm text-gray-500">
          🤖 AI continuously compares current demand with predicted demand
          to generate smart grid alerts.
        </p>

      </div>

    </div>
  );
}

export default AlertCard;