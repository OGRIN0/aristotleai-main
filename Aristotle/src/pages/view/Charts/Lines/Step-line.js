import React from "react";
import { Line } from "react-chartjs-2";
import { australianMedals as medalsData } from "../../demo-data/data-vizualization";

const years = medalsData.map((item) => item.year);
const goldMedals = medalsData.map((item) => item.gold);
const silverMedals = medalsData.map((item) => item.silver);
const bronzeMedals = medalsData.map((item) => item.bronze);
const StepLine = ({ theme }) => {
  console.log(theme);
  const data = {
    labels: years,
    datasets: [
      {
        label: "Bronze Medals",
        data: bronzeMedals,
        borderColor: "#cd7f32",
        fill: false,
        stepped: "middle",
      },
      {
        label: "Silver Medals",
        data: silverMedals,
        borderColor: "#c0c0c0",
        fill: false,
        stepped: "middle",
      },
      {
        label: "Gold Medals",
        data: goldMedals,
        borderColor: "#ffd700",
        fill: false,
        stepped: "middle",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: false,
        text: "Australian Medal Count",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          color: theme,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme, // Color of x-axis grid lines
        },
        ticks: {
          color: theme, // Color of x-axis labels
        },
      },
      x: {
        grid: {
          color: theme, // Color of x-axis grid lines
        },
        ticks: {
          color: theme, // Color of x-axis labels
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};
export default StepLine;
