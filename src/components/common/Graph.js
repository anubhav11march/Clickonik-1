import React from "react";
import "./Graph.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

function Graph() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thru", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Views",
        fill: false,
        borderColor: "orange",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        data: [45, 76, 32, 98, 34, 56, 52],
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
  };

  return (
    <>
      <Line data={data} height={100} options={options} />
    </>
  );
}

export default Graph;
