import React, { lazy, useCallback, useEffect, useState } from "react";
// import shortid from 'shortid';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Link,
  useParams,
  Navigate,
} from "react-router-dom";
import { Router1, Router2, Router3 } from "./Router";
import AdminLayout from "../../component/AdminLayout";
import Login from "../../pages/Login";
import useAuth from "../Auth.jsx";
import CharacterChat from "../../pages/view/CharacterChat.js";
import AddTask from "../../CRUD_components/addTask";
import Home from "../../CRUD_components/Home";
import Navbar from "../../CRUD_components/Navbar";
import Index from "../../CRUD_components/index";
import { BsCart3, BsPersonCircle, BsSearch } from "react-icons/bs";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  Shop2Rounded,
} from "@mui/icons-material";
import Layout from "../../updated_version/Layout/Layout.jsx";
import useTheme from "../../context.js";
import { ChatProvider } from "../../chatContext.jsx";

function Header() {
  return (
    <header
      className="header"
      style={{ position: "fixed", zIndex: "999", top: "0px" }}
    >
      <span>
        <div className="sidebar-title">
          <div
            className="sidebar-brand"
            style={{ color: "white", display: "flex" }}
          >
            <BsCart3 className="icon_header" /> logo
          </div>
        </div>
      </span>

      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <BsPersonCircle className="icon" />
      </div>
    </header>
  );
}

const Header2 = () => {
  const { theme } = useTheme();
  return (
    <AppBar position="fixed" sx={{ zIndex: 999 }}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <ShoppingCartIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            // sx={{ color: theme.palette.common.white, ml: 1 }}
          >
            <Shop2Rounded />
          </Typography>
        </Box>

        <Box>
          <IconButton color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>

        <Box>
          <IconButton color="inherit" aria-label="account">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

function RequireAuth({ children }) {
  const { authed } = useAuth();

  return authed == "true" ? children : <Navigate to="/login" replace />;
}
const AppLayout = () => (
  <>
    <Header />
    <Navbar />
    <Outlet />
  </>
);
export default function Controller() {
  const [sideNavOpen, setSideNavOpen] = useState(true);

  const handleToggleSideNav = useCallback(() => {
    setSideNavOpen((prev) => !prev);
  }, []);
  return (
    <>
      <ChatProvider>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Login />} />
              <Route path="/:userId" element={<Router1 />} />
            </Route>
            <Route element={<AppLayout />}>
              <Route path="/index" element={<Index />} />
              <Route path="/homepage" element={<Home />} />
              <Route path="/addtask" element={<AddTask />} />
              <Route path="/addtask/:id" element={<AddTask />} />
            </Route>
            {/* <Route path="/" element={<AdminLayout />}>
            <Route
              path=":router1/:router2"
              element={
                <RequireAuth>
                  <Router2 />
                </RequireAuth>
              }
            /> */}
            {/* <Route path=":router1/:router2" render={({ staticContext }) => {
                            debugger;
                            if (staticContext) staticContext.status = code;
                            return children;
                        }} /> */}
            {/* </Route> */}
            <Route
              path="/"
              element={
                <Layout onMenuClick={handleToggleSideNav} open={sideNavOpen} />
              }
            >
              <Route
                path=":router1/:router2"
                element={
                  <RequireAuth>
                    <Router2 />
                  </RequireAuth>
                }
              />
            </Route>
            <Route
              path="/"
              element={
                <Layout onMenuClick={handleToggleSideNav} open={sideNavOpen} />
              }
            >
              <Route path="/characterai/chat" Component={CharacterChat} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChatProvider>
    </>
  );
}
