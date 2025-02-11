import React, { useState } from "react";

import {
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillGearFill,
} from "react-icons/bs";
import "./nav.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <>
      {" "}
      <aside id="sidebar" className={sidebar ? "sidebar-responsive" : ""}>
        
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <a href="/">
              <BsGrid1X2Fill className="icon" /> Home
            </a>
          </li>

          <li className="sidebar-list-item">
            <a href="/home">
              <BsFillGrid3X3GapFill className="icon" /> View
            </a>
          </li>
          <li className="sidebar-list-item">
            <a href="/addtask">
              <BsPeopleFill className="icon" /> Add Member
            </a>
          </li>

          <li className="sidebar-list-item">
            <a href=""> 
              <BsFillGearFill className="icon" /> Setting
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
