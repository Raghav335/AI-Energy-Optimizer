function ReportTable({ analytics }) {
  const rows = [
    {
      parameter: "Current Load",
      value: analytics ? `${analytics.currentLoad} MW` : "Loading...",
    },
    {
      parameter: "AI Prediction",
      value: analytics ? `${analytics.predictedLoad} MW` : "Loading...",
    },
    {
      parameter: "Solar Output",
      value: analytics ? `${analytics.solarOutput} MW` : "Loading...",
    },
    {
      parameter: "Grid Frequency",
      value: analytics ? `${analytics.gridFrequency} Hz` : "Loading...",
    },
    {
      parameter: "Voltage",
      value: analytics ? `${analytics.voltage} V` : "Loading...",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        📋 Power Report
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left py-3">
              Parameter
            </th>

            <th className="text-left py-3">
              Value
            </th>

          </tr>

        </thead>

        <tbody>

          {rows.map((row, index) => (

            <tr
              key={index}
              className="border-b hover:bg-gray-100"
            >

              <td className="py-4">
                {row.parameter}
              </td>

              <td className="py-4 font-semibold">
                {row.value}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ReportTable;