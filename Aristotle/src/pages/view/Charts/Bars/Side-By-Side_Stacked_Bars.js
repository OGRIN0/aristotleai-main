import React from "react";
import { Bar } from "react-chartjs-2";

import { population as data } from "../../demo-data/data-vizualization";

const SideBySideStackedBars = ({ theme }) => {
  // Labels for each state
  const labels = data.map((item) => item.state);

  // Extracting data for males and females separately
  const maleYoungData = data.map((item) => item.maleyoung);
  const maleMiddleData = data.map((item) => item.malemiddle);
  const maleOlderData = data.map((item) => item.maleolder);
  const femaleYoungData = data.map((item) => item.femaleyoung);
  const femaleMiddleData = data.map((item) => item.femalemiddle);
  const femaleOlderData = data.map((item) => item.femaleolder);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Male (0-14)",
        backgroundColor: "rgba(255, 99, 132, 1)",
        data: maleYoungData,
        stack: "male",
      },
      {
        label: "Male (15-64)",
        backgroundColor: "rgba(255, 159, 64, 1)",
        data: maleMiddleData,
        stack: "male",
      },
      {
        label: "Male (65 and older)",
        backgroundColor: "rgba(255, 206, 86, 1)",
        data: maleOlderData,
        stack: "male",
      },
      {
        label: "Female (0-14)",
        backgroundColor: "rgba(75, 192, 192, 1)",
        data: femaleYoungData,
        stack: "female",
      },
      {
        label: "Female (15-64)",
        backgroundColor: "rgba(54, 162, 235, 1)",
        data: femaleMiddleData,
        stack: "female",
      },
      {
        label: "Female (65 and older)",
        backgroundColor: "rgba(153, 102, 255, 1)",
        data: femaleOlderData,
        stack: "female",
      },
    ],
  };

  const options = {
    indexAxis: "x",
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "State",
          color: theme,
        },
        grid: {
          color: theme, // Color of x-axis grid lines
        },
        ticks: {
          color: theme, // Color of x-axis labels
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Population",
          color: theme,
        },
        grid: {
          color: theme, // Color of x-axis grid lines
        },
        ticks: {
          color: theme, // Color of x-axis labels
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        cornerRadius: 10,
        displayColors: false,
      },
      legend: {
        position: "bottom",
        labels: {
          color: theme,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default SideBySideStackedBars;
