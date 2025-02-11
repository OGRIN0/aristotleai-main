// import React, { useRef, useState, useEffect, Component } from "react";
// import { ChatHeader, ChatContainer, ChatInput } from "../../component/ChatRoom";
// import AdminLayout from "../../component/AdminLayout";
// import ApiService from "../../service/Api.service";
import Chat from "../../component/Chatbot/Chat";
// export default function ChatRoom() {
//   // TODO: Implement Redux and improve theme
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const inputref = useRef(null);

//   const handleInputSubmit = async (e) => {
//     setShow(true);
//     e.preventDefault();
//     console.log(inputref.current.value);
//     if (inputref.current.value === "") return;
//     var data = inputref.current.value;
//     setData((cr) => [
//       ...cr,
//       {
//         from: "user",
//         message: data,
//       },
//     ]);

//     inputref.current.value = "";
//     let gaiRes = await ApiService.httpGet("/gai/chat?q=" + data);

//     setData((cr) => [
//       ...cr,
//       {
//         from: "llm",
//         message: gaiRes,
//       },
//     ]);
//   };

//   const bottomref = useRef(null);
//   useEffect(() => {
//     bottomref.current?.scrollIntoView({ behavior: "smooth" });
//   }, [data]);

//   //TODO add a fab to scroll up to the top
//   return (
//     <div>
//       <div>
//         <div className="tw-w-full tw-h-[100vh] tw-relative tw-flex tw-flex-col">
//           <div className="tw-flex tw-flex-col tw-min-h-[100vh] tw-overflow-y-auto tw-pb-32 tw-scrollbar-thin tw-scrollbar-thumb-gray-600 tw-scrollbar-track-theme-black tw-scrollbar-thumb-rounded-md">
//             <div className="tw-text-quattrocento-sans">
//               {show ? <ChatHeader initial_model="VERTEXAI  " /> : <></>}
//             </div>
//             <ChatContainer
//               chatdata={data}
//               // image="https://static.wixstatic.com/media/4f187b_1613ecfd7d8d41dab1b2f23fb80b5e07%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4f187b_1613ecfd7d8d41dab1b2f23fb80b5e07%7Emv2.png"
//               image="/assets/icons/vertexai.svg"
//             />

//             <div ref={bottomref} />
//           </div>
//           <ChatInput
//             input={inputref}
//             handleSubmit={handleInputSubmit}
//             style={{ color: "white" }}
//           />
//         </div>
//       </div>
//       <div>
//         <Chat />
//       </div>
//     </div>
//   );
// }

// import React, { useRef, useState, useEffect } from "react";
// import { Container, Stack, Paper, Fab, Box } from "@mui/material";
// import ChatHeader from "../../component/ChatRoom/ChatHeader";
// import ChatContainer from "../../component/ChatRoom/ChatContainer";
// import ChatInput from "../../component/ChatRoom/ChatInput";
// import Chat from "../../component/Chatbot/Chat";
// import ApiService from "../../service/Api.service";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// export default function ChatRoom() {
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const inputRef = useRef(null);
//   const bottomRef = useRef(null);

//   const handleInputSubmit = async (e) => {
//     setShow(true);
//     e.preventDefault();

//     const inputValue = inputRef.current.value.trim();
//     if (inputValue === "") return;

//     // Add user message to data state
//     setData((prevState) => [
//       ...prevState,
//       {
//         from: "user",
//         message: inputValue,
//       },
//     ]);

//     // Clear input field
//     inputRef.current.value = "";

//     // Fetch response from API
//     try {
//       const gaiRes = await ApiService.httpGet("/gai/chat?q=" + inputValue);

//       // Add AI response to data state
//       setData((prevState) => [
//         ...prevState,
//         {
//           from: "llm",
//           message: gaiRes,
//         },
//       ]);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     // Scroll to bottom of chat container
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [data]);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <Container
//       maxWidth="md"
//       sx={{ height: "100vh", display: "flex", flexDirection: "column" }}
//     >
//       <Stack
//         spacing={2}
//         sx={{
//           flex: 1,
//           display: "flex",
//           flexDirection: "column",
//           pb: 4,
//           bgcolor: "transparent"
//         }}
//       >
//         {show && (
//           <Paper sx={{ boxShadow: "none", bgcolor: "transparent" }}>
//             <ChatHeader initial_model="VERTEXAI" />
//           </Paper>
//         )}
//         <Paper sx={{ flex: 1, boxShadow: "none", bgcolor: "transparent" }}>
//           <ChatContainer chatdata={data} image="/assets/icons/vertexai.svg" />
//           <div ref={bottomRef} />
//         </Paper>
//         <Paper sx={{ boxShadow: "none" }}>
//           <ChatInput input={inputRef} handleSubmit={handleInputSubmit} />
//         </Paper>
//       </Stack>
//       <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
//         <Fab color="primary" onClick={scrollToTop}>
//           <ArrowUpwardIcon />
//         </Fab>
//       </Box>
//       <Chat />
//     </Container>
//   );
// }

import React, { useState, useRef, useCallback, useContext } from "react";
import { Box, Typography } from "@mui/material";
import ChatList from "../../component/genericChatModules/ChatList";
import InputUpload from "../../component/genericChatModules/components/QueryInput";
import { ChatContext } from "../../chatContext";
import { ENUM, useUITheme } from "../../updated_version/Context/themeContext";
import {
  MessageFrom,
  MessageGen,
} from "../../component/genericChatModules/message.type";
import { ChimeraLogo } from "../../component/genericChatModules/icons/logo";
import { queryVertexAI } from "../../apis/vertex.api";

const ChatRoom = () => {
  const { vertextAI } = useContext(ChatContext);
  const { messages, addNewMessage } = vertextAI;
  const [query, setQuery] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [error, setError] = useState(null);
  const { theme } = useUITheme();

  //AJAX When Click Button or Enter //
  const handleSubmitQueryOrUpload = useCallback(async () => {
    setIsThinking(true);
    setError(null);
    if (query.trim()) {
      const textQuery = query.trim();
      addNewMessage(new MessageGen("text", MessageFrom.USER, textQuery));
      setQuery("");
      const queryResult = await queryVertexAI(textQuery);
      queryResult.match({
        Ok: (data) => {
          addNewMessage(new MessageGen("text", MessageFrom.AI, data));
          setIsThinking(false);
        },
        Err: (error) => {
          addNewMessage(new MessageGen("error", MessageFrom.AI, error));
          setError(error);
          setIsThinking(false);
        },
      });
    } else {
      setError("Please provide a query...");
      addNewMessage(new MessageGen("error", MessageFrom.USER, error));
      setIsThinking(false);
    }
  }, [query, addNewMessage]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      sx={{ flexGrow: 1, m: "auto" }}
      width={"100%"}
      height={"100%"}
      justifyContent={"space-between"}
    >
      <Box display="flex" justifyContent="flex-end" p={1}>
        <Box alignSelf={"center"} width={"100%"}>
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{
              fontWeight: "bold",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              color: "var(--color-accent)",
              fontFamily: "var(--fontFamily)",
              mt:6
            }}
          >
            VertexAI
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        sx={{ overflow: "hidden" }}
        // maxHeight={"100vh"}
        // minHeight={550}
      >
        <Box
          p={2}
          flexGrow={1}
          display="flex"
          flexDirection="column"
          justifyContent={"flex-end"}
          height={"80vh"}
          position={"relative"}
        >
          <Box
            position={"absolute"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            top={40}

            left={0}
            zIndex={-2}
            alignSelf={"center"}
            justifySelf={"center"}
            m={"auto"}
            mt={7}
          >
            <ChimeraLogo
              widthProps={400}
              heightProps={400}
              fillColor={`${
                theme === ENUM.DARK
                  ? "var(--color-dark-bg)"
                  : "var(--color-light-bg)"
              }`}
            />
          </Box>
          <ChatList
            chatData={messages}
            isThinking={isThinking}
            file={undefined}
            padding={5}
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          width={"70%"}
          m={"0px auto"}
          mt={7}
          borderRadius={5}
          justifySelf={"flex-end"}
          sx={{
            border: `0.5px solid ${
              isInputFocused
                ? "var(--color-accent)"
                : "var(--color-accent-lighter3)"
            }`,
            transition: "border-color 0.3s",
            bgcolor:
              theme === ENUM.LIGHT
                ? "var( --color-input-light)"
                : "var( --color-input-dark)",
          }}
        >
          <InputUpload
            handleSubmit={handleSubmitQueryOrUpload}
            isThinking={isThinking}
            query={query}
            setQuery={setQuery}
            setIsInputFocused={setIsInputFocused}
            placeholder={"Message VertextAI"}
            isShowUpload={false}
          />
        </Box>
      </Box>
      <Chat/>
    </Box>
  );
};

export default ChatRoom;
