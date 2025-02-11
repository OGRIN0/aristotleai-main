import React from "react";
import { Line } from "react-chartjs-2";
export default function SimpleArea({ theme }) {
  const data = {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015"],
    datasets: [
      {
        label: "Android",
        data: [67225, 179873, 310088, 0, 0, 539318], // Add 0 values for 2013 and 2014 to match the data structure
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "iOS",
        data: [46598, 90560, 118848, 0, 0, 189924], // Add 0 values for 2013 and 2014 to match the data structure
        fill: true,
        backgroundColor: "rgba(255,99,132,0.5)",
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
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
        title: {
          display: true,
          text: "Sales",
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

  return <Line data={data} options={options} />;
}
