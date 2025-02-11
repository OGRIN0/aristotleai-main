import "./Character.css";
import { useState, useEffect } from "react";
import useTheme from "../../context";
const CharacterList = ({ Name, Desc, img, onClick }) => {
  const [color, setColor] = useState("");

  const { theme } = useTheme();
  useEffect(() => {
    if (theme === "dark") {
      setColor("bg-gray-800");
    } else if (theme === "light") {
      setColor("bg-gray-800");
    } else if (theme === "violet") {
      setColor("tw-bg-purple-950");
    } else if (theme == "cyan") {
      setColor("tw-bg-cyan-950");
    } else if (theme == "blue") {
      setColor("tw-bg-blue-950");
    } else if (theme == "lime") {
      setColor("tw-bg-lime-950");
    }
  }, [theme]);
  return (
    <div>
      <div className={`${color}` + " chatbot-list"} onClick={onClick}>
        <div className="character-img">
          <img src={img} />
        </div>
        <div className="character-body">
          <h5>{Name}</h5>
          <p>{Desc}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
