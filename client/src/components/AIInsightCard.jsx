function AIInsightCard({ analytics }) {
  if (!analytics) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          🤖 AI Insights
        </h2>

        <p>Loading...</p>
      </div>
    );
  }

  let status = "🟢 Stable";
  let statusColor = "text-green-600";

  if (analytics.currentLoad > 8500) {
    status = "🟡 High Demand";
    statusColor = "text-yellow-500";
  }

  if (analytics.currentLoad > 9000) {
    status = "🔴 Critical";
    statusColor = "text-red-600";
  }

  const confidence = Math.min(
    99,
    90 + Math.floor(Math.random() * 10)
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        🤖 AI Insights
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">
          <span className="text-gray-600">
            Grid Health
          </span>

          <span className="font-bold text-green-600">
            98%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            AI Confidence
          </span>

          <span className="font-bold text-blue-600">
            {confidence}%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            Peak Demand
          </span>

          <span className="font-bold">
            6:00 PM
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">
            System Status
          </span>

          <span className={`font-bold ${statusColor}`}>
            {status}
          </span>
        </div>

      </div>

    </div>
  );
}

export default AIInsightCard;