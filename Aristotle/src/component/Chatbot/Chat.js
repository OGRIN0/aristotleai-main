// import React, { useState, useEffect } from "react";
// import IconButton from "@mui/material/IconButton";
// import ChatIcon from "@mui/icons-material/Chat";
// import MinimizeIcon from "@mui/icons-material/Minimize";
// import CropSquareIcon from "@mui/icons-material/CropSquare";
// import CloseIcon from "@mui/icons-material/Close";
// import config from "./config.js";
// import MessageParser from "./MessageParser.js";
// import ActionProvider from "./ActionProvider.js";
// import Chatbot from "react-chatbot-kit";
// //import 'react-chatbot-kit/build/main.css';
// import Tooltip from "@mui/material/Tooltip";
// import "./chatcss.css";

// import ChatsContainer from "./ChatContainer.js";

// import useTheme from "../../context.js";

// function Chat() {
//   const [chatbotOpen, setChatbotOpen] = useState(false);
//   const [chatbotMinimized, setChatbotMinimized] = useState(false);

//   const styles = {
//     "@keyframes shake": {
//       "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
//       "10%": { transform: "translate(-1px, 1px) rotate(-1deg)" },
//       "20%": { transform: "translate(-1px, -1px) rotate(1deg)" },
//       "30%": { transform: "translate(1px, 1px) rotate(0deg)" },
//       "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
//       "50%": { transform: "translate(-1px, 1px) rotate(-1deg)" },
//     },
//     "chat-icon-opened": {
//       transform: "scale(1.5)",
//     },
//     "chat-icon-closed": {
//       transform: "scale(1)",
//     },
//   };

//   const handleIconClick = () => {
//     setChatbotOpen((prev) => !prev);
//     setChatbotMinimized(false); // Ensure the chatbot is not minimized when opened
//   };

//   const [colorq, setColor] = useState("");
//   const [col, setCol] = useState("");
//   const [colorReply, setColorReply] = useState("");

//   const { theme } = useTheme();
//   useEffect(() => {
//     if (theme == "dark") {
//       setCol("#202a38");
//     } else if (theme == "light") {
//       setCol("#202a38");
//     } else if (theme == "violet") {
//       setCol("#3b0764");
//     } else if (theme == "cyan") {
//       setCol("#083344");
//     } else if (theme == "blue") {
//       setCol("#172554");
//     } else if (theme == "lime") {
//       setCol("#1a2e05");
//     }
//   }, [theme]);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: "20px",
//         right: "10px",
//         zIndex: 1,
//       }}
//     >
//       <Tooltip
//         title={
//           <span style={{ fontSize: "15px" }}>How can I help you today?</span>
//         }
//       >
//         <IconButton
//           color={colorq}
//           aria-label="Open chat"
//           onClick={handleIconClick}
//           onMouseEnter={(e) => {
//             e.target.classList.add("shake-effect");
//             setTimeout(() => {
//               e.target.classList.remove("shake-effect");
//             }, 300);
//           }}
//           style={{
//             transition: "transform 0.3s ease-in-out",
//             color: col,
//             boxShadow: "2px 2px 5px #F4AAB9",
//           }}
//           className={chatbotOpen ? "chat-icon-opened" : "chat-icon-closed"}
//         >
//           {chatbotOpen ? (
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "5px",
//                   borderRadius: "10px",
//                   backgroundColor: "#1F2937",
//                 }}
//               >
//                 <CloseIcon style={{ color: "white", fontSize: "25px" }} />
//               </div>
//             </div>
//           ) : (
//             <ChatIcon style={{ fontSize: "40px" }} />
//           )}
//         </IconButton>
//       </Tooltip>

//       {chatbotOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: "20px",
//             right: "10px",
//             zIndex: 2,
//             borderRadius: "10px",
//             maxWidth: "1000px",
//           }}
//         >
//           <ChatsContainer />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chat;

import React, { useState, useEffect, useCallback } from "react";
import { IconButton, Tooltip, Box, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import ChatsContainer from "./ChatContainer.js";
import { useUITheme, ENUM } from "../../updated_version/Context/themeContext.jsx";
import ForumIcon from "@mui/icons-material/Forum";

const Chat = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatbotMinimized, setChatbotMinimized] = useState(false);
  const theme = useUITheme();

  console.log(chatbotOpen, "OPEN");
  const handleIconClick = useCallback(() => {
    setChatbotOpen((prev) => !prev);
    setChatbotMinimized(false);
  }, []);

  const [col, setCol] = useState("");

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "10px",
        zIndex: 1,
      }}
    >
      <Tooltip
        title={
          <Typography fontSize={14} fontFamily={"var(--fontFamily)"}>
            How can I help you today?
          </Typography>
        }
      >
        <IconButton
          aria-label="Open Chat"
          sx={{
            transition: "transform 0.3s ease-in-out",
            fontSize: 40,
            borderRadius: "50%",
            border: "1px solid var(--color-accent)",
            mr: 2,
            "& .MuiSvgIcon-root": {
              transition: "transform 0.5s",
              transform:
                chatbotOpen === false ? "rotate(0deg)" : "rotate(0deg)",
            },
          }}
          onClick={handleIconClick}
        >
          {chatbotOpen ? (
            <CloseIcon
              fontSize="inherit"
              sx={{ m: 0.6, color: "var(--color-accent)" }}
            />
          ) : (
            <ForumIcon
              fontSize="inherit"
              sx={{ m: 0.6, color: "var(--color-accent)" }}
            />
          )}
        </IconButton>
      </Tooltip>
      <Tooltip
        title={<Typography fontSize={15}>How can I help you today?</Typography>}
      />
      {chatbotOpen && (
        <Box
          sx={{
            position: "fixed",
            top: "65px",
            right: "50px",
            zIndex: 2,
            borderRadius: "10px",
            maxWidth: "1000px",
          }}
        >
          <ChatsContainer />
        </Box>
      )}
    </Box>
  );
};

export default Chat;
