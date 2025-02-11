// CustomHeader.js
import React from "react";

import AndroidIcon from "@mui/icons-material/Android";

const CustomHeader = ({ botName }) => (
  <div
    style={{
      backgroundColor: "#065e6e",
      padding: "15px",
      fontFamily: "Quattrocento Sans, sans-serif",
      color: "white",
      textAlign: "left",
      fontSize: "18px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <AndroidIcon style={{ marginRight: "5px", fontSize: "28px" }} />{" "}
    {/* Robot icon */}
    {botName}
  </div>
);

export default CustomHeader;
