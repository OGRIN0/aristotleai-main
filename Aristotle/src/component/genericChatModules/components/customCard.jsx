import React from "react";
import { useUITheme } from "../../../updated_version/Context/themeContext";
import "./CardComponent.scss";


const CustomCard = ({ iconComponent, title, description }) => {
  const { theme } = useUITheme();
  return (
    <div className="customCardBox">
      <div className="customCard">
        <h2>{title}</h2>
        <div className="content">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
