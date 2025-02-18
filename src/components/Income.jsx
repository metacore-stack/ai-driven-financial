import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Expenses",
        data: [
          5000, 10000, 15000, 20000, 12000, 8000, 14000, 10000, 16000, 18000,
          20000, 22000,
        ],
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Income",
        data: [
          8000, 12000, 18000, 20000, 15000, 10000, 17000, 14000, 20000, 22000,
          25000, 30000,
        ],
        borderColor: "#36A2EB",
        borderDash: [5, 5],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide default legend
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `$${tooltipItem.raw.toLocaleString()}`; // Format numbers as currency
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => `$${value.toLocaleString()}`, // Format y-axis labels as currency
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#151A32] text-white w-full p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Income & Expenses</h2>
      <div
        className="w-full md:w-3/4"
        style={{ height: "310px", width: "760px" }}
      >
        <Line
          data={data}
          options={{
            ...options,
            maintainAspectRatio: false, // Disable aspect ratio to allow custom height
          }}
        />
      </div>
      <div className="flex justify-center gap-20 w-full mt-6 text-center">
        <div>
          <h3 className="text-xl font-bold">$20,239</h3>
          <p className="text-blue-500">Max. Income</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">$20,239</h3>
          <p className="text-red-500">Max. Expenses</p>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
