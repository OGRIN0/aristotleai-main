import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughNut = ({ theme }) => {
  const data = {
    labels: [
      "Asia",
      "Africa",
      "Northern America",
      "Latin America and the Caribbean",
      "Europe",
      "Oceania",
    ],
    datasets: [
      {
        data: [
          4119626293, 1012956064, 344124520, 590946440, 727082222, 35104756,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)", // Red
          "rgba(54, 162, 235, 1)", // Blue
          "rgba(255, 205, 86, 1)", // Yellow
          "rgba(75, 192, 192, 1)", // Green
          "rgba(153, 102, 255, 1)", // Purple
          "rgba(255, 159, 64, 1)", // Orange
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderWidth: 0, // Remove border
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio
    plugins: {
      title: {
        display: false,
        text: "The Population of Continents and Regions",
      },
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
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughNut;
