import {
  Sun,
  Wind,
  Droplets,
  MapPin,
  Thermometer,
} from "lucide-react";

function WeatherCard({ weather }) {
  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Weather
          </h2>

          <p className="text-gray-500 flex items-center gap-1 mt-1">
            <MapPin size={16} />
            Delhi, India
          </p>

        </div>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">

          <Sun size={34} className="text-white" />

        </div>

      </div>

      {/* Temperature */}

      <div className="mb-6">

        <h1 className="text-5xl font-extrabold text-blue-600">

          {weather?.temperature ?? "--"}°

        </h1>

        <p className="text-gray-500 mt-1">
          Sunny • Clear Sky
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-blue-50 rounded-2xl p-4">

          <Droplets className="text-blue-600 mb-2" />

          <p className="text-sm text-gray-500">
            Humidity
          </p>

          <h3 className="font-bold text-lg">

            {weather?.humidity ?? "--"}%

          </h3>

        </div>

        <div className="bg-green-50 rounded-2xl p-4">

          <Wind className="text-green-600 mb-2" />

          <p className="text-sm text-gray-500">
            Wind
          </p>

          <h3 className="font-bold text-lg">

            {weather?.windSpeed ?? "--"} km/h

          </h3>

        </div>

        <div className="bg-orange-50 rounded-2xl p-4">

          <Thermometer className="text-orange-500 mb-2" />

          <p className="text-sm text-gray-500">
            Feels Like
          </p>

          <h3 className="font-bold text-lg">

            {weather?.temperature ?? "--"}°

          </h3>

        </div>

        <div className="bg-purple-50 rounded-2xl p-4">

          <Sun className="text-yellow-500 mb-2" />

          <p className="text-sm text-gray-500">
            UV Index
          </p>

          <h3 className="font-bold text-lg">
            Moderate
          </h3>

        </div>

      </div>

    </div>
  );
}

export default WeatherCard;