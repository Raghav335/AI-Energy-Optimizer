function AnalyticsCard({ title, value, color, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300">

      <div className="flex items-center justify-between">
        <h3 className="text-gray-500 text-sm font-semibold">
          {title}
        </h3>

        <span className="text-3xl">
          {icon}
        </span>
      </div>

      <h2 className={`text-3xl font-bold mt-4 ${color}`}>
        {value}
      </h2>

    </div>
  );
}

export default AnalyticsCard;