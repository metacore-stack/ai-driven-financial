import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Others", "Stock", "Business", "Land"],
    datasets: [
      {
        label: "Assets",
        data: [15700, 22500, 120000, 135000],
        backgroundColor: ["#03D58F", "#36A2EB", "#5123AB", "#E6324A"],
        hoverBackgroundColor: ["#02B77A", "#2E8AE0", "#421B8E", "#C5283E"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `$${tooltipItem.raw.toLocaleString()}`; // Format numbers
          },
        },
      },
    },
    cutout: "70%", // Create the donut effect
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#151A32] text-white p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Assets</h2>
      <div className="w-60 h-60">
        <Doughnut data={data} options={options} />
      </div>
      <div className="mt-6 text-left font-semibold flex flex-col gap-2">
        <p>Land: $135,000</p>
        <p>Business: $120,000</p>
        <p>Stock: $22,500</p>
        <p>Others: $15,700</p>
      </div>
    </div>
  );
};

export default DonutChart;
