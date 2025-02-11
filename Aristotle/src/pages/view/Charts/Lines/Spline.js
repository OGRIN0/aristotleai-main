import React from "react";
import { Line } from "react-chartjs-2";
const Spline = ({ theme }) => {
const data = {
  labels: ["Canada", "China", "Russia", "Australia", "United States"],
  datasets: [
    {
      label: "Hydro-electric",
      data: [669, 1556, 1273, 164, 306],
      borderColor: "rgb(75, 192, 192)",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Oil",
      data: [354, 2556, 1017, 81, 251],
      borderColor: "rgb(255, 99, 132)",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Natural gas",
      data: [441, 2292, 548, 30, 25],
      borderColor: "rgb(54, 162, 235)",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Coal",
      data: [52, 288, 954, 160, 342],
      borderColor: "rgb(255, 205, 86)",
      fill: false,
      tension: 0.4,
    },
    {
      label: "Nuclear",
      data: [88, 198, 193, 33, 189],
      borderColor: "rgb(153, 102, 255)",  
      fill: false,
      tension: 0.4,
    },
  ],
};

const options = {
  plugins: {
    title: {
      display: false,
      text: "Energy Consumption in 2004\n(Millions of Tons, Oil Equivalent)",
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
    },
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
};

 return <Line data={data} options={options} />
}
export default Spline;
