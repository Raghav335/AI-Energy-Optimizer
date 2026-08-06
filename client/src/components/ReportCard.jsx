function ReportCard({ title, value, color, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center">
        <h3 className="text-gray-500 font-medium">
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

export default ReportCard;