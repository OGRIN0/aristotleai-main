import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./components/addTask";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
import {
  BsCart3,
  BsPersonCircle,
  BsSearch,
} from "react-icons/bs";

function Header() {
  return (
    <header className="header">
      <span>
      <div className="sidebar-title">
        <div className="sidebar-brand" style={{ color: "white" }}>
          <BsCart3 className="icon_header"  /> logo
        </div>
      </div>
      </span>

      <div className="header-left">
        <BsSearch className="icon"  />
      </div>
      <div className="header-right">
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

const AppLayout = () => (
  <>
    <Header  />
    <Navbar />
    <Outlet />
  </>
);

function App() {


  return (
    <>
      <BrowserRouter>
        <AppLayout  />
        {/* Navbar and Header outside the Routes */}
        <Routes>
          <Route path="/" element={<AddTask />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addtask" element={<AddTask />} />
          <Route path="/addtask/:id" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
