import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function DownloadButtons({ analytics }) {

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("AI Power Optimizer Report", 14, 20);

    autoTable(doc, {
      startY: 35,
      head: [["Parameter", "Value"]],
      body: [
        ["Current Load", `${analytics?.currentLoad ?? "--"} MW`],
        ["AI Prediction", `${analytics?.predictedLoad ?? "--"} MW`],
        ["Solar Output", `${analytics?.solarOutput ?? "--"} MW`],
        ["Grid Frequency", `${analytics?.gridFrequency ?? "--"} Hz`],
        ["Voltage", `${analytics?.voltage ?? "--"} V`],
      ],
    });

    doc.save("AI-Power-Report.pdf");
  };

  const downloadCSV = () => {
    const rows = [
      ["Parameter", "Value"],
      ["Current Load", analytics?.currentLoad],
      ["AI Prediction", analytics?.predictedLoad],
      ["Solar Output", analytics?.solarOutput],
      ["Grid Frequency", analytics?.gridFrequency],
      ["Voltage", analytics?.voltage],
    ];

    const csv = rows.map((row) => row.join(",")).join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "AI-Power-Report.csv";
    link.click();
  };

  return (
    <div className="flex gap-4 mt-8">

      <button
        onClick={downloadPDF}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
      >
        📄 Download PDF
      </button>

      <button
        onClick={downloadCSV}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
      >
        📊 Download CSV
      </button>

      <button
        onClick={() => window.print()}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        🖨 Print
      </button>

    </div>
  );
}

export default DownloadButtons;