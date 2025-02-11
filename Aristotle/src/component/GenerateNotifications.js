import React, { useState, useEffect } from "react";
import useTheme from "../context";

function NotificationList({ color, name, imgSrc, time }) {
  return (
    <div className={" notification-list"}>
      <div className="notification-list_img">
        <img src={imgSrc} alt="user" />
      </div>
      <div className="notification-list_detail">
        <p className={`${color}`}>
          <b>{name}</b> reacted to your post
        </p>
        <p className={`${color}`}>
          <small>{time}</small>
        </p>
      </div>
    </div>
  );
}

function GenerateNotifications() {
  const { theme, darkTheme, lightTheme, violetTheme } = useTheme();

  const [color, setColor] = useState("");
  const [colorbody, setColorbody] = useState("");
  const [colortext, setColortext] = useState("");

  useEffect(() => {
    if (theme == "dark") {
      setColor("bg-gray-800");
    } else if (theme == "light") {
      setColor("tw-bg-slate-50");
    } else if (theme == "violet") {
      setColor("tw-bg-purple-950");
    } else if (theme == "cyan") {
      setColor("tw-bg-cyan-950");
    } else if (theme == "blue") {
      setColor("tw-bg-blue-950");
    } else if (theme == "lime") {
      setColor("tw-bg-lime-950");
    }
  }, [theme]);
  useEffect(() => {
    if (theme == "dark") {
      setColorbody("bg-gray-700");
      setColortext("text-white");
    } else if (theme == "light") {
      setColorbody("bg-white");
      setColortext("text-black");
    } else if (theme == "violet") {
      setColorbody("tw-bg-purple-700");
      setColortext("text-white");
    } else if (theme == "cyan") {
      setColorbody("tw-bg-cyan-900");
      setColortext("text-white");
    } else if (theme == "blue") {
      setColorbody("tw-bg-blue-900");
      setColortext(" text-white");
    } else if (theme == "lime") {
      setColorbody("tw-bg-lime-900");
      setColortext(" text-white");
    }
  }, [theme]);

  const [expanded, setExpanded] = useState(false);

  //   const toggleExpanded = () => {
  //     setExpanded(!expanded);
  //   };

  return (
    <div
      className={"container1"+` ${expanded ? "expanded" : "notification-ui_dd"}`}
      //   id={theme}
    >
      <style>
        {`
          .container1::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className={`${color}` + " notification-ui_dd-header"}>
        <h3 className={`${colortext}` + " text-start"}>Notification</h3>
      </div>
      <div
        className={`notification-ui_dd-content ${colorbody} ${
          expanded ? "show" : "hide"
        }`}
      >
        <div className="notification-column">
          <h5 className={`${colortext}` + " text-start text-black-50"}>New</h5>
          <NotificationList
            color={colortext}
            name="John Doe"
            imgSrc="https://i.imgur.com/zYxDCQT.jpg"
            time="10 mins ago"
          />
          <NotificationList
            color={colortext}
            name="Richard Miles"
            imgSrc="https://i.imgur.com/w4Mp4ny.jpg"
            time="1 day ago"
          />
        </div>
        <div className="notification-column">
          <h5 className={`${colortext}` + " text-start text-black-50"}>
            Earlier
          </h5>
          <NotificationList
            color={colortext}
            name="Brian Cumin"
            imgSrc="https://i.imgur.com/ltXdE4K.jpg"
            time="1 day ago"
          />
          <NotificationList
            color={colortext}
            name="Lance Bogrol"
            imgSrc="https://i.imgur.com/CtAQDCP.jpg"
            time="1 day ago"
          />
        </div>
      </div>
      <div className={`${color}` + " notification-ui_dd-footer"}>
        {/* <button className="btn btn-success btn-block" onClick={toggleExpanded}>
                    {expanded ? 'Collapse' : 'View All'}
                </button> */}
      </div>
    </div>
  );
}

export default function   App() {
  return <GenerateNotifications />;
}
