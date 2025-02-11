import React, { useEffect, useRef, useState } from "react";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import SideBar from "./SideBar";
import { ThemeProvider } from "../Context/themeContext";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1040,
    },
  },
  components: {},
});

const Layout = ({ onMenuClick, open }) => {
  // const [parentHeight, setParentHeight] = useState(0);
  // const parentRef = useRef(null);

  // const getParentHeight = () => {
  //   if (parentRef.current) {
  //     return parentRef.current.clientHeight;
  //   }
  //   return 0;
  // };
  // console.log(parentHeight, "Parent Height");

  // useEffect(() => {
  //   const handleResize = debounce(() => {
  //     setParentHeight(getParentHeight());
  //   }, 100);
  //   setParentHeight(getParentHeight());
  //   if(parentRef.current) parentRef.current.addEventListener('resize', handleResize);
  //   return () => {
  //     if(parentRef.current) parentRef.current.addEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider>
          <CssBaseline /> <SideBar open={open} onClose={onMenuClick} />
          <main
            style={{
              marginLeft: open ? 250 : 0,
              transition: "margin 0.3s",
            }}
          >
            <div className="tw-p-2">
              <TopBar onMenuClick={onMenuClick} />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                // ref={parentRef}
              >
                <Outlet />
              </motion.div>
            </div>
          </main>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
};

export default React.memo(Layout);
