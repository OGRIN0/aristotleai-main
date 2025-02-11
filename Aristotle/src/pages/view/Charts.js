import React, { useEffect, useState } from "react";
import { Chart, registerables } from "chart.js"; // Import necessary modules from chart.js
import useTheme from "../../context"; // Import theme context
import Dropdown from "react-bootstrap/Dropdown"; // Import Dropdown component from react-bootstrap
import DropdownButton from "react-bootstrap/DropdownButton"; // Import DropdownButton component from react-bootstrap
import "../../style.css"; // Import custom CSS styles

// Import various chart components
import SideBySideStackedBars from "./Charts/Bars/Side-By-Side_Stacked_Bars";
import Sidebyside from "./Charts/Bars/side-by-side";
import SimpleBar from "./Charts/Bars/simpleBar";
import StepLine from "./Charts/Lines/Step-line";
import SimpleLine from "./Charts/Lines/SimpleLine";
import Spline from "./Charts/Lines/Spline";
import SimpleArea from "./Charts/Area/SimpleArea";
import PieChart from "./Charts/Pie/Pie";
import DoughNut from "./Charts/Pie/Doughnut";

Chart.register(...registerables); // Register chart components

const App = () => {
  const { theme } = useTheme(); // Get theme from context
  const [color, setColor] = useState("tw-bg-white"); // State for setting color based on theme
  const [chartNo, setChartNo] = useState(0); // State for tracking current chart number
  const [chartName, setChartName] = useState("Simple Bar"); // State for tracking current chart name
  const [arrow, setArrow] = useState(true); // State for toggling arrow icon
  const [heading, setHeading] = useState(""); // State for setting chart heading
  const [gridcolor, setgridcolor] = useState(undefined); // State for setting grid color

  // Effect hook to update color and grid color based on theme change
  useEffect(() => {
    if (theme == "dark") {
      setColor("bg-gray-800 text-white");
      setgridcolor("#C3BCBC");
    } else if (theme == "light") {
      setColor("tw-bg-white");
      setgridcolor(undefined);
    } else if (theme == "violet") {
      setColor("tw-bg-purple-950 text-white");
      setgridcolor("#C3BCBC");
    } else if (theme == "cyan") {
      setColor("tw-bg-cyan-950 text-white");
      setgridcolor("#C3BCBC");
    } else if (theme == "blue") {
      setColor("tw-bg-blue-950 text-white");
      setgridcolor("#C3BCBC");
    } else if (theme == "lime") {
      setColor("tw-bg-lime-950 text-white");
      setgridcolor("#C3BCBC");
    }
  }, [theme]);

  // Function to render the selected chart component based on chart number
  const call = () => {
    if (chartNo == 0) return <SimpleBar theme={gridcolor} />;
    else if (chartNo == 1) return <Sidebyside theme={gridcolor} />;
    else if (chartNo == 2) return <SideBySideStackedBars theme={gridcolor} />;
    else if (chartNo == 3) return <StepLine theme={gridcolor} />;
    else if (chartNo == 4) return <SimpleLine theme={gridcolor} />;
    else if (chartNo == 5) return <Spline theme={gridcolor} />;
    else if (chartNo == 6) return <SimpleArea theme={gridcolor} />;
    else if (chartNo == 7) return <PieChart theme={gridcolor} />;
    else if (chartNo == 8) return <DoughNut theme={gridcolor} />;
  };

  // Effect hook to update chart heading based on chart number change
  useEffect(() => {
    if (chartNo == 0) setHeading("Class Strength");
    else if (chartNo == 1) setHeading("Olimpic Medals in 2008");
    else if (chartNo == 2) setHeading("Population: Age Structure");
    else if (chartNo == 3) setHeading("Australian Medal Count");
    else if (chartNo == 4)
      setHeading("Confidence in Institutions in American society\n(Great deal)");
    else if (chartNo == 5)
      setHeading("Energy Consumption in 2004\n(Millions of Tons, Oil Equivalent)");
    else if (chartNo == 6) setHeading("Worldwide Sales to End Users by OS");
    else if (chartNo == 7) setHeading("Area of Countries");
    else if (chartNo == 8)
      setHeading("The Population of Continents and Regions");
  }, [chartNo]);

  // Function to set chart number and name
  const setFunction = (chartNo, ChartName) => {
    setChartNo(chartNo);
    setChartName(ChartName);
  };

  // Styles for different elements
  const style1 = {
    paddingLeft: "15%",
    color: "gray",
    backgroundColor: `${theme === "light" ? "" : "#f0f0f0"}`,
  };

  const style2 = {
    paddingLeft: "10%",
    color: "black",
  };

  const style3 = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      className="container1"
      style={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "50px",
      }}
    >
      {/* Hide scrollbar */}
      <style>
        {`
          .container1::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <div className="row">
        {/* Dropdown for selecting chart */}
        <span>
          <DropdownButton
            title={
              <span>
                {chartName + " "}
                {arrow ? <>&#x2B07;</> : <> &#x2B06;</>}
              </span>
            }
            onClick={() => {
              setArrow(!arrow);
            }}
            style={{
              position: "fixed",
              zIndex: "1",
              top: "2%",
            }}
          >
            {/* Dropdown items */}
            <div
              style={{
                backgroundColor: `${
                  theme === "light" ? "" : "rgba(0,0,0,0.2)"
                }`,
              }}
            >
              <div
                style={{
                  padding: "5%",
                }}
              ></div>

              <p style={style2}>BAR CHART</p>
              <Dropdown.Item
                onClick={() => setFunction(0, "Simple Bar")}
                style={style1}
              >
                Simple Bar
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setFunction(1, "Side-By-Side Bar")}
                style={style1}
              >
                Side-By-Side Bar
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setFunction(2, "Stacked Bar")}
                style={style1}
              >
                Stacked Bar
              </Dropdown.Item>
              <div
                style={{
                  padding: "5%",
                }}
              ></div>
              <p style={style2}>LINE CHART</p>
              <Dropdown.Item
                onClick={() => setFunction(4, "Simple Line")}
                style={style1}
              >
                Simple Line
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setFunction(5, " Spline")}
                style={style1}
              >
                Spline
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setFunction(3, "Step Line ")}
                style={style1}
              >
                Step Line
              </Dropdown.Item>
              <div
                style={{
                  padding: "5%",
                }}
              ></div>
              <p style={style2}>AREA CHART</p>
              <Dropdown.Item
                onClick={() => setFunction(6, "Simple Area")}
                style={style1}
              >
                Simple Area
              </Dropdown.Item>
              <div
                style={{
                  padding: "5%",
                }}
              ></div>
              <p style={style2}>PIE CHART</p>
              <Dropdown.Item
                onClick={() => setFunction(7, "Pie Chart")}
                style={style1}
              >
                Pie Chart Chart
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setFunction(8, "Doughnut Chart")}
                style={style1}
              >
                Doughnut
              </Dropdown.Item>
            </div>
          </DropdownButton>
        </span>

        {/* Canvas for rendering chart */}
        <div className="col-md-11" style={{ width: "100%" }}>
          <canvas
            className="max-w-800"
            id="chartjs-line-chart"
            width="800"
            height="50"
          ></canvas>
          {/* Chart heading */}
          <h5 id={theme} style={style3}>
            {heading}
          </h5>
          {/* Chart container */}
          <div className={" card border-5 shadow rounded-lg"}>
            <div className={" card"}>
              <div className={color + " card-body"} style={style3}>
                {/* Render selected chart */}
                {call()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
