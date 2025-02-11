import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart({ theme }) {
  const data = {
    labels: [
      "Russia",
      "Canada",
      "USA",
      "China",
      "Brazil",
      "Australia",
      "India",
      "Others",
    ],
    datasets: [
      {
        data: [12, 7, 7, 7, 6, 5, 2, 55],
        backgroundColor: [
          "rgba(75, 192, 192, 0.9)",
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 206, 86, 0.9)",
          "rgba(153, 102, 255, 0.9)",
          "rgba(255, 159, 64, 0.9)",
          "rgba(255, 99, 132, 0.9)",
          "rgba(54, 162, 235, 0.9)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: theme,
        },
      },
    },
  };

  return (
    <div style={{ width: "550px", height: "550px" }}>
      <Pie data={data} options={options} />
    </div>
  );
}
