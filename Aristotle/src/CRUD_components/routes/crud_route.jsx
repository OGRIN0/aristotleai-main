import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "../addTask";
import Home from "../Home";
import Navbar from "../Navbar";
import "../App.css";
import { Outlet } from "react-router-dom";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

function App() {
  return (
    <>
      <BrowserRouter>
        <AppLayout /> {/* Navbar outside the Routes */}
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
