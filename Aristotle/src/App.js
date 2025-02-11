import React, { lazy, useEffect, useState } from "react";
// import shortid from 'shortid';
// import { Outlet } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import "./component/GenerateNotifactions.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
} from "react-router-dom";
import Controller from "./service/router/Controller";

export default function App() {
  return (
    <>
      <Controller />
    </>
  );
}
