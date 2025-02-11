import React from "react";
import { Line } from "react-chartjs-2";

const SimpleLine = ({theme}) =>{

const data = {
  labels: [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
  ],
  datasets: [
    {
      label: "TV news",
      data: [22, 21, 21, 20, 19, 19, 18, 17, 17, 16],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "Church",
      data: [48, 46, 45, 45, 42, 42, 41, 38, 36, 36],
      fill: false,
      borderColor: "rgb(255, 99, 132)",
      tension: 0.1,
    },
    {
      label: "Military",
      data: [35, 36, 35, 36, 33, 32, 30, 30, 29, 29],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return value + "%";
        },
        color: theme,
      },
      grid: {
        color: theme, // Color of x-axis grid lines
      },
    },
    x: {
      grid: {
        color: theme, // Color of y-axis grid lines
      },
      ticks: {
        color: theme, // Color of x-axis labels
      },
    },
  },
  plugins: {
    title: {
      display: false,
      text: "Confidence in Institutions in American society\n(Great deal)",
    },
    legend: {
      position: "bottom",
      labels: {
        color: theme,
      },
    },
  },
};

return (<Line data={data} options={options} />)
}
export default SimpleLine;
