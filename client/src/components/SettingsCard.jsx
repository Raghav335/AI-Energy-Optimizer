function SettingsCard({ icon, title, subtitle, children }) {
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
            {icon}
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800">
              {title}
            </h2>

            <p className="text-sm text-gray-500">
              {subtitle}
            </p>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

export default SettingsCard;