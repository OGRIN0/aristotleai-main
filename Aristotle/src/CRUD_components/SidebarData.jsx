import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/index",    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "addtask",
    path: "/addtask",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "view",
    path: "/homepage",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];
