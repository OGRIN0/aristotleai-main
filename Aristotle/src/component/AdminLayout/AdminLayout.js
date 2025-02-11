import { Outlet, Link, NavLink } from "react-router-dom";
import React, { Component, useState, useEffect, useRef } from "react";
import Popup from "../Popup.js";
import Notify from "../Notify.js";
import GenerateNotifications from "../GenerateNotifications.js";
import "../../style.css";
import { themeContext } from "../../context.js";
import "@fortawesome/fontawesome-free/css/all.css";
import Profile from "../profile.js";
import Pro from "../profilepop.js";

const Button = ({ color, onClickFunction }) => (
  <button
    style={{
      width: "100%",
      height: "12px",
      borderRadius: "100%",
      backgroundColor: color,
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease-in-out",
      outline: "none", // Remove focus outline
    }}
    onClick={onClickFunction}
  />
);
const COMP = () => {
  const buttonColors = [
    "#fffefc",
    "#1e2542",
    "#3d1599",
    "#006064",
    "#33a1ff",
    "#a1ff33",
  ];

  const handleClick = (buttonIndex) => {
    // console.log(`Button ${buttonIndex + 1} clicked!`);
    if (buttonIndex == 0) {
      lightTheme();
    } else if (buttonIndex == 1) {
      darkTheme();
    } else if (buttonIndex == 2) {
      violetTheme();
    } else if (buttonIndex == 3) {
      cyanTheme();
    } else if (buttonIndex == 4) {
      blueTheme();
    } else if (buttonIndex == 5) {
      limeTheme();
    }
  };

  const [theme, setTheme] = React.useState("light");
  const [colorq, setColor] = useState("");

  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };
  const violetTheme = () => {
    setTheme("violet");
  };
  const cyanTheme = () => {
    setTheme("cyan");
  };
  const blueTheme = () => {
    setTheme("blue");
  };
  const limeTheme = () => {
    setTheme("lime");
  };

  const [currentMenu, setMenu] = useState("Character");
  const [buttonPopup, setButtonPopup] = useState(false);
  const [notify, setNotify] = useState(false);

  const notificationRef = useRef(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let curLink = document.location.pathname;
    let linkObj = {
      "/view/gpt": "GPT",
      "/view/Vertex": "Vertex",
      "/view/bedrock": "Bedrock",
      "/view/home": "Dashboard",
      "/view/home_brewn": "Brewn",
      "/view/Finance": "Finance",
      "/view/HRai": "HR AI",
      "/view/LegalAI": "Legal AI",
      "/view/CharacterAi": "Character",
      "/view/LegalAII": "Legal_AI",
      "/view/HrDataAnalytics": "HR Data Analytics",
      "/view/Charts": "Charts",
      "/view/ChangeLog": "ChangeLog",
      "/view/Activity": "Activity",
      "/view/Price": "Price",
      "/view/BankingBot": "BankingBot",
      "/view/Documentgpt": "Documentgpt",
      "/view/RegulatoryBot": "RegulatoryBot",
      "/view/FinGPT": "FinGPT",
      "/view/Rbacllm": "RBAC_LLM",
      "/view/Rbacllm_clone": "RBAC_LLM_CLONE",
      "/view/MoE": "MOE",
    };
    linkObj[curLink] ? setMenu(linkObj[curLink]) : "Dashboard";
  });

  useEffect(() => {
    if (theme == "dark") {
      setColor("bg-gray-800");
    } else if (theme == "light") {
      setColor("bg-gray-800");
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

  // console.log(colorq);
  const [sidebar, setSidebar] = useState(true);
  const handlesideClick = () => {
    setSidebar(!sidebar);
  };

  const [profile, setProfile] = useState(false);

  return (
    <>
      <themeContext.Provider
        value={{
          theme,
          darkTheme,
          lightTheme,
          violetTheme,
          cyanTheme,
          blueTheme,
          limeTheme,
        }}
      >
        <nav
          id="sidebarMenu"
          className={
            colorq + "  sidebar d-lg-block  text-white collapse overflow-hidden"
          }
          data-simplebar="init"
          style={{
            transition:
              "background-color 0.5s ease, color 0.5s ease, width 0.5s",
            width: `${sidebar ? "" : "0px"}`,
            boxShadow: "0 0 10px #000",
          }}
        >
          <div className="simplebar-wrapper" style={{ margin: 0 }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                <div
                  className="simplebar-content-wrapper"
                  tabIndex={0}
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "auto", overflow: "auto" }}
                >
                  <div className="simplebar-content" style={{ padding: 0 }}>
                    <div className="sidebar-inner px-4 pt-3">
                      <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
                        <div className="collapse-close d-md-none">
                          <a
                            href="#sidebarMenu"
                            data-bs-toggle="collapse"
                            data-bs-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="true"
                            aria-label="Toggle navigation"
                          >
                            <svg
                              className="icon icon-xs"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <ul className="nav flex-column pt-3 pt-md-0">
                        <li className="">
                          <a className="nav-link d-flex align-items-center">
                            <span className="sidebar-icon">
                              <img
                                src="../../assets/img/brand/logo.png"
                                height={30}
                                width={30}
                                alt="AristotleAI Logo"
                              />
                            </span>
                            <span className="mt-1 ms-1 sidebar-text">
                              ChimeraAI
                            </span>
                          </a>
                        </li>
                        <div style={{ padding: "10px" }}></div>
                        <li
                          className={` ${currentMenu == "Dashboard" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Dashboard"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            style={{ gap: "10px" }}
                            to="/view/home"
                            className="nav-link d-flex "
                            onClick={(e) => {
                              setMenu("Dashboard");
                            }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/gmail.svg"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Gmail Craft</span>
                          </Link>
                        </li>
                        <li
                          className={` ${currentMenu == "Brewn" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Brewn"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            style={{ gap: "10px" }}
                            to="/view/home_brewn"
                            className="nav-link d-flex "
                            onClick={(e) => {
                              setMenu("Brewn");
                            }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/homebrewn.svg"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Home Brewn</span>
                          </Link>
                        </li>
                        <li
                          className={` ${currentMenu == "Finance" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Finance"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            style={{ gap: "10px" }}
                            to="/view/Finance"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("Finance");
                            }}
                          >
                            <span
                              className="sidebar-icon"
                              style={{ border: "1px" }}
                            >
                              <img
                                src="/assets/icons/finance.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Finance </span>
                          </Link>
                        </li>
                        <li
                          className={` ${currentMenu == "Retail" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Retail"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/Retail"
                            className="nav-link d-flex "
                            onClick={(e) => {
                              setMenu("Retail");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/retail.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Retail</span>
                          </Link>
                        </li>

                        <li
                          className={` ${currentMenu == "Hybrid" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Hybrid"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/Hybrid"
                            className="nav-link d-flex "
                            onClick={(e) => {
                              setMenu("Hybrid");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/hybrid.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Hybrid</span>
                          </Link>
                        </li>
                        <li
                          className={` ${currentMenu == "GPT" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "GPT"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/gpt"
                            className="nav-link d-flex "
                            onClick={(e) => {
                              setMenu("GPT");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/gpt.svg"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="tw-sidebar-text">GPT</span>
                          </Link>
                        </li>

                        <li
                          className={` ${currentMenu == "Bedrock" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Bedrock"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/bedrock"
                            className="nav-link d-flex  "
                            onClick={(e) => {
                              setMenu("Bedrock");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/bedrock.svg"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Bedrock</span>
                          </Link>
                        </li>

                        <li
                          className={` ${currentMenu == "Vertex" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Vertex"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/Vertex"
                            className="nav-link d-flex  "
                            onClick={(e) => {
                              setMenu("Vertex");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/vertexai.svg"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">VertexAI</span>
                          </Link>
                        </li>

                        <li
                          className={` ${currentMenu == "Character" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Character"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/CharacterAi"
                            className="nav-link d-flex  "
                            onClick={(e) => {
                              setMenu("Character");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/characterai.png"
                                height="25px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">CharacterAI</span>
                          </Link>
                        </li>

                        <li
                          className={` ${currentMenu == "HR AI" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "HR AI"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/HRai"
                            className="nav-link d-flex  "
                            onClick={(e) => {
                              setMenu("HR AI");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/hr.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">HRAI</span>
                          </Link>
                        </li>
                        <li
                          className={` ${currentMenu == "Legal AI" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Legal AI"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/LegalAI"
                            className="nav-link d-flex  "
                            onClick={(e) => {
                              setMenu("Legal AI");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                src="/assets/icons/balance.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">LegalAI</span>
                          </Link>
                        </li>
                        <li
                          className={` ${
                            currentMenu === "HR Data Analytics" ? "" : ""
                          }`}
                          style={{
                            boxShadow:
                              currentMenu === "HR Data Analytics"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/HrDataAnalytics"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("Hr Data Analytics");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/hrDataAnalytics.jpg"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">
                              HR Data Analytics
                            </span>
                          </Link>
                        </li>

                        {/* <li
                          className={` ${currentMenu === "Charts" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Charts"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/Charts"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("Charts");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/chat.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Chart</span>
                          </Link>
                        </li>
                        <li
                          className={` ${
                            currentMenu === "ChangeLog" ? "" : ""
                          }`}
                          style={{
                            boxShadow:
                              currentMenu === "ChangeLog"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/ChangeLog"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("Change Log");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/log.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Change Log</span>
                          </Link>
                        </li>

                        <li
                          className={` ${currentMenu === "Activity" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Activity"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/Activity"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("Activity");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/activity1.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Activity</span>
                          </Link>
                        </li> 


                        
                        <li
                          className={` ${currentMenu === "Price" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "Price"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/Price"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("Price");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                className="hrimg"
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/price.jpg"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">Price</span>
                          </Link>
                        </li> */}
                        <li
                          className={` ${
                            currentMenu === "BankingBot" ? "" : ""
                          }`}
                          style={{
                            boxShadow:
                              currentMenu === "BankingBot"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/BankingBot"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("BankingBot");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/Banking.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">BankingBot</span>
                          </Link>
                        </li>
                        <li
                          className={` ${
                            currentMenu === "RegulatoryBot" ? "" : ""
                          }`}
                          style={{
                            boxShadow:
                              currentMenu === "RegulatoryBot"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/RegulatoryBot"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("RegulatoryBot");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/regur.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">RegulatoryBot</span>
                          </Link>
                        </li>
                        <li
                          className={` ${currentMenu === "FinGPT" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "FinGPT"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/FinGPT"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("FinGPT");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/fin.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">FinGPT</span>
                          </Link>
                        </li>

                        <li
                          className={` ${
                            currentMenu === "Documentgpt" ? "" : ""
                          }`}
                          style={{
                            boxShadow:
                              currentMenu === "Documentgpt"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/Documentgpt"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("Documentgpt");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                className="hrimg"
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/price.jpg"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">DocumentGpt</span>
                          </Link>
                        </li>

                        <li
                          className={` ${currentMenu === "RBAC_LLM" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "RBAC_LLM"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/Rbacllm"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("RBAC_LLM");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                className="hrimg"
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/rbac.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">AI Governance</span>
                          </Link>
                        </li>

                        <li
                          className={` ${
                            currentMenu === "RBAC_LLM_CLONE" ? "" : ""
                          }`}
                          style={{
                            boxShadow:
                              currentMenu === "RBAC_LLM_CLONE"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/RbacllmClone"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("RBAC_LLM_CLONE");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                className="hrimg"
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/rbac.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">GovernanceAI</span>
                          </Link>
                        </li>

                        <li
                          className={` ${currentMenu === "MOE" ? "" : ""}`}
                          style={{
                            boxShadow:
                              currentMenu === "MOE"
                                ? "1px 2px 9px #F4AAB9"
                                : "",
                            borderRadius: "10px",
                          }}
                        >
                          <Link
                            to="/view/MoE"
                            className="nav-link d-flex"
                            onClick={(e) => {
                              setMenu("MOE");
                            }}
                            style={{ gap: "10px" }}
                          >
                            <span className="sidebar-icon">
                              <img
                                className="hrimg"
                                style={{ borderRadius: "100%" }}
                                src="/assets/icons/moe.png"
                                height="20px"
                                width="20px"
                              />
                            </span>
                            <span className="sidebar-text">
                              Mixture of Experts
                            </span>
                          </Link>
                        </li>

                        <li
                          role="separator"
                          className="dropdown-divider mt-4 mb-3 border-gray-700"
                        />

                        {sidebar && (
                          <li className="">
                            <a
                              href="#"
                              className="btn btn-secondary d-flex align-items-center justify-content-center btn-upgrade-pro"
                            >
                              <span className="sidebar-icon d-inline-flex align-items-center justify-content-center">
                                <svg
                                  className="icon icon-xs me-2"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                              <button
                                className="sidebar-text"
                                onClick={() => setButtonPopup(true)}
                              >
                                Connect with us
                              </button>
                              <Popup
                                trigger={buttonPopup}
                                setTrigger={setButtonPopup}
                              >
                                <h2 style={{ textAlign: "center" }}>Connect</h2>{" "}
                                <h3 style={{ textAlign: "center" }}>
                                  <a href="https://www.centillionlabs.com/">
                                    enquiries@centillionlabs.com
                                  </a>
                                </h3>
                              </Popup>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: 621 }}
            />
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{ width: 0, display: "none" }}
            />
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{ height: 0, display: "none" }}
            />
          </div>
        </nav>
        <main
          class="content"
          id={theme}
          style={{
            width: `${sidebar ? "" : "100%"}`,
            MarginLeft: `${sidebar ? "" : "0px"}`,
          }}
        >
          {/* <button onClick={handlesideClick} style={{}}>
            button
          </button> */}
          <nav
            className={
              " navbar navbar-top navbar-expand navbar-dashboard navbar-dark"
            }
            id={theme}
            style={{
              // backgroundColor: "black",
              position: "fixed",
              width: "100%",
              height: "10%",
              borderRadius: "0%",
              left: 0,
              zIndex: 1,
              boxShadow: "0 0 10px #000",
            }}
          >
            <div className=" container-fluid px-0">
              <div
                className="d-flex justify-content-between w-100"
                id="navbarSupportedContent"
              >
                <div className="d-flex align-items-center">
                  {/* Search form */}
                  <form
                    className="navbar-search form-inline"
                    id="navbar-search-main"
                  >
                    <div className="input-group input-group-merge search-bar"></div>
                  </form>
                  {/* / Search form */}
                </div>
                {/* Navbar links */}
                <ul className="navbar-nav align-items-center tw-mr-4">
                  <li
                    className=" dropdown"
                    onMouseOver={() => {
                      setDropdownVisible(true);
                    }}
                    onClick={() => {
                      setDropdownVisible(!dropdownVisible);
                    }}
                  >
                    <a>
                      <div
                        ref={dropdownRef}
                        className="position-relative  "
                        style={{ width: "40px" }}
                      >
                        <i
                          className="fa-solid fa-sun fa-fw fa-xl margin-right-md fa-spin"
                          style={{
                            color: "",
                            " --fa-animation-duration": "1s",
                          }}
                        ></i>
                      </div>
                    </a>

                    {dropdownVisible && (
                      <div
                        style={{
                          marginTop: "10px",
                          width: "80px",
                          height: "55px",
                          border: "2px solid #ddd",
                          padding: "10px",
                          borderRadius: "10px",
                          position: "fixed",
                          zIndex: "10",
                          backgroundColor: "AppWorkspace",
                        }}
                      >
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "10px",
                          }}
                        >
                          {buttonColors.map((color, index) => (
                            <Button
                              key={index}
                              color={color}
                              onClickFunction={() => handleClick(index)}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </li>

                  <li className=" dropdown">
                    <a
                      className="nav-link text-dark notification-bell unread dropdown-toggle"
                      data-unread-notifications="true"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                      aria-expanded="false"
                      onClick={() => setNotify(!notify)}
                    >
                      {theme === "dark" ||
                      theme === "violet" ||
                      theme === "cyan" ||
                      theme === "blue" ||
                      theme === "lime" ||
                      theme === "light" ? (
                        <svg
                          className="icon icon-sm"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                      ) : (
                        <svg
                          className="icon icon-sm text-gray-900"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                        </svg>
                      )}
                      <Notify
                        className="itis"
                        trigger={notify}
                        // setTrigger={setNotify}
                        ref={notificationRef}
                      >
                        <GenerateNotifications />
                      </Notify>
                    </a>
                  </li>
                  <li className=" dropdown ms-lg-3">
                    <a
                      className="nav-link dropdown-toggle pt-1 px-0  "
                      // to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                      aria-expanded="false"
                      onMouseOver={(e) => {
                        setProfile(true);
                      }}
                      onMouseLeave={() => {
                        setProfile(!profile);
                      }}
                    >
                      <div className="media d-flex align-items-center">
                        <img
                          className="avatar rounded-circle"
                          alt="Image placeholder"
                          src="../../assets/img/team/user.png"
                        />
                        <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                          <span
                            className={
                              theme == "light"
                                ? "tw-text-black"
                                : "text-white" + " mb-0 fw-bold"
                            }
                          >
                            Chinnasamy
                          </span>
                        </div>
                      </div>
                      <Pro trigger={profile}>
                        <Profile />
                      </Pro>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Outlet />
        </main>
      </themeContext.Provider>
    </>
  );
};

export default COMP;
// const Layout = () => {
//   return (
//     <>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       <Outlet />
//     </>
//   )
// };

// export default Layout;
