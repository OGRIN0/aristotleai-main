import React from "react";
import { Bar } from "react-chartjs-2";

export const Sidebyside = (props) => {
  const { theme } = props;
  const chartData = {
    labels: ["USA", "China", "Russia", "UK", "Germany", "France"],
    datasets: [
      {
        label: "Gold Medals",
        backgroundColor: "#ffd700",
        data: [36, 51, 22, 19, 42, 31],
      },
      {
        label: "Silver Medals",
        backgroundColor: "#c0c0c0",
        data: [39, 32, 27, 27, 31, 29],
      },
      {
        label: "Bronze Medals",
        backgroundColor: "#cd7f32",
        data: [38, 21, 28, 47, 29, 25],
      },
    ],
  };

  const options = {
    indexAxis: "x",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: theme,
        },
      },
    },
    
    scales: {
      x: {
        grid: {
          color: theme, // Color of x-axis grid lines
        },
        ticks: {
          color: theme, // Color of x-axis labels
        },
      },
      y: {
        grid: {
          color: theme, // Color of y-axis grid lines
        },
        ticks: {
          color: theme, // Color of x-axis labels
        },
      },
    },
  };
  return <Bar data={chartData} options={options} />;
};
export default Sidebyside;
