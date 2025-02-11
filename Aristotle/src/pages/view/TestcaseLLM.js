// import React, { useState } from "react";
// import { css } from "@emotion/react";
// import { BarLoader } from "react-spinners";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// const TestcaseLLM = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   const handleIframeLoad = () => {
//     setIsLoading(false);
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: "10%",
//         left: "17vw",
//         width: "83%",
//         height: "100%",
//         overflowY: "auto",
//       }}
//       className="cont"
//     >
//       <style>{`.cont::-webkit-scrollbar{
//         display:none;
//       }`}</style>
//       <BarLoader
//         css={override}
//         loading={isLoading}
//         color={"Green"} // You can change the color to your preference
//         style={{ width: "100%" }}
//       />

//       <iframe
//         title="Streamlit Chatbot"
//         src="https://fingpt-5n4n.onrender.com"
//         width="100%"
//         height="900px"
//         allow="fullscreen"
//         style={{ border: "none", display: isLoading ? "none" : "block" }}
//         onLoad={handleIframeLoad}
//       />
//     </div>
//   );
// };

// export default TestcaseLLM;

import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  LinearProgress,
  styled,
  linearProgressClasses,
} from "@mui/material";
import { ENUM, useUITheme } from "../../updated_version/Context/themeContext";

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 2,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "var(--color-accent)",
  },
}));

const TestcaseLLM = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useUITheme();

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (isLoading) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isLoading]);

  return (
    <Container
      sx={{
        width: "100%",
        pb: 2,
        m: "auto",
      }}
    >
      <Box mb={2}>
        {isLoading && (
          <CustomLinearProgress
            sx={{ color: "var(--color-accent) !important" }}
          />
        )}
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          maxHeight: 650,
          borderRadius: 1,
          width: "100%",
          m: "auto",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--color-accent-lighter2)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: `${
              theme == ENUM.DARK
                ? "var(--color-dark-bg)"
                : "var(--color-light-border)"
            }`,
            borderRadius: "4px",
            borderRight: "0.5px solid var(--color-accent-lighter2)",
          },
        }}
      >
        <iframe
          title="Streamlit Chatbot"
          src=" http://127.0.0.1:5002"
          width="100%"
          height="1200px"
          allowFullScreen
          style={{ border: "none", display: isLoading ? "none" : "block" }}
          onLoad={handleIframeLoad}
        />
      </Box>
    </Container>
  );
};

export default TestcaseLLM;
