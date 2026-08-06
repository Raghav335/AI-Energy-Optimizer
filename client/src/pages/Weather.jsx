import { useState } from "react";
import useWeather from "../hooks/useWeather";
import Sidebar from "../components/Sidebar";

function Weather() {
  const [city, setCity] = useState("Delhi");
  const [search, setSearch] = useState("Delhi");

  const weather = useWeather(city);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-gray-800">
          🌤 Weather Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Search weather of any city (Default: Delhi)
        </p>

        {/* Search Box */}

        <div className="flex gap-4 mt-8">

          <input
            type="text"
            placeholder="Enter City..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl px-4 py-3 w-80 shadow-sm"
          />

          <button
            onClick={() => setCity(search)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-xl"
          >
            Search
          </button>

          <button
            onClick={() => {
              setCity("Delhi");
              setSearch("Delhi");
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-xl"
          >
            Delhi
          </button>

        </div>

        {/* Weather Cards */}

        {!weather ? (
          <div className="mt-10 text-xl font-semibold">
            Loading...
          </div>
        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-500">📍 City</h3>
              <h2 className="text-3xl font-bold mt-2">
                {weather.city}
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-500">🌡 Temperature</h3>
              <h2 className="text-3xl font-bold text-orange-500 mt-2">
                {weather.temperature} °C
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-500">💧 Humidity</h3>
              <h2 className="text-3xl font-bold text-cyan-600 mt-2">
                {weather.humidity} %
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-gray-500">💨 Wind Speed</h3>
              <h2 className="text-3xl font-bold text-green-600 mt-2">
                {weather.windSpeed} km/h
              </h2>
            </div>

          </div>

        )}

      </div>
    </div>
  );
}

export default Weather;