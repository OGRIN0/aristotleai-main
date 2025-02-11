import React from "react";
import { Bar } from "react-chartjs-2";

export const SimpleBar = ({ theme }) => {
  const barChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Class Strength (Bar Chart)",
        backgroundColor: "rgb(0,150,255)",
        borderWidth: 2,
        data: [68, 77, 89, 80, 30, 10, 209],
      },
    ],
  };
  console.log(theme);

  return (
    <Bar
      data={barChartData}
      options={{
        plugins: {
          title: {
            display: false,
            text: "Class Strength (Bar Chart)",
            fontSize: 20,
            color: theme,
          },
          legend: {
            display: true,
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
      }}
    />
  );
};
export default SimpleBar;
