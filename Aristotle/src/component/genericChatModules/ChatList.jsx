import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useUITheme, ENUM } from "../../updated_version/Context/themeContext";
import { ChatMessage } from "./components/Chat";
import { Loading } from "./components/Loading";

const ChatList = ({ chatData, isThinking, file, padding }) => {
  const { theme } = useUITheme(); //Context Updated_Version
  const bottomref = useRef(null);
  // console.log(chatData, "CHAT DATA IN THE CHAT LIST");
  //When new Message scroll to the bottom//
  useEffect(() => {
    bottomref.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData, isThinking]);
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      p={padding ?? "auto"}
      sx={{
        overflowY: "auto",
        width: "70%",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "var(--color-accent-lighter3)",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor:
            theme === ENUM.LIGHT
              ? "var(--color-dark-border)"
              : "var(--color-accent-lighter4)",
          borderRadius: "4px"
        },
        margin: "auto",
      }}
    >
      {chatData.map((chat, index) => (
        <ChatMessage key={index} chat={chat} file={file} />
      ))}
      {isThinking && <Loading side={"start"} />}
      <div ref={bottomref} />
    </Box>
  );
};

export default ChatList;
