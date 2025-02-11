// // ChatContainer.js
// import React, { useState, useRef, useEffect } from "react";
// import "./chatcss.css";
// import { ChatContainer, ChatInput } from "../../component/ChatRoom";
// import ApiService from "../../service/Api.service";
// import AndroidIcon from "@mui/icons-material/Android";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRobot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
// import Button from "@mui/material/Button";
// import { Avatar, Fade } from "@mui/material";
// const ChatsContainer = () => {
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const inputRef = useRef(null);
//   const chatBodyRef = useRef(null);

//   const handleInputSubmit = async (e) => {
//     e.preventDefault();
//     if (inputRef.current.value === "") return;

//     const userMessage = inputRef.current.value;

//     // Update state with user's message
//     setData((cr) => [
//       ...cr,
//       {
//         from: "user",
//         message: userMessage,
//       },
//     ]);

//     // Clear the input field
//     inputRef.current.value = "";

//     // Fetch response from the chatbot API
//     let gaiRes = await ApiService.httpGet("/gai/chat?q=" + userMessage);

//     // Update state with chatbot's response
//     setData((cr) => [
//       ...cr,
//       {
//         from: "llm",
//         message: gaiRes,
//       },
//     ]);
//   };

//   const onEnterPress = (e) => {
//     if (e.key === "Enter") {
//       setShow(true);
//       handleInputSubmit(e);
//     }
//   };
//   useEffect(() => {
//     // Scroll down when new messages are added
//     chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
//   }, [data]);

//   return (
//     <div
//       id="chat-container"
//       class="container bg-white pt-3 text-white mt-5 rounded shadow "
//       style={{ width: "500px" }}
//     >
//       <div class="row px-4">
//         <div class="col-8 p-0">
//           <h2 class="text-primary">
//             <i class="fas fa-comment-dots"></i>
//             Aristotle Genie
//           </h2>
//         </div>
//         <div class="col text-right pr-0">
//           <i class="close-button far fa-times-circle"></i>
//         </div>
//         <hr class="col-12 mb-0"></hr>
//       </div>
//       {/* <div style={{ display: 'flex', marginLeft: '10px', position: '' }}>

//           <div className="icon-circle">

//             <FontAwesomeIcon icon={faRobot} size="1x" />

//             <div className="active-indicator">
//           </div>

//       <span class="text">Ask us Anything-we'll get back here</span>
//       </div>
//        </div> */}

//       <div
//         className="chat-body"
//         ref={chatBodyRef}
//         style={{
//           overflowY: "auto",
//           maxHeight: "350px",
//           width: "500px",
//           position: "fixed",
//         }}
//       >
//         {show ? <ChatContainer chatdata={data} /> : <></>}
//       </div>
//       <div className="input-container  " style={{ marginTop: "400px" }}>
//         <input
//           type="text"
//           className="text-input"
//           ref={inputRef}
//           placeholder="Ask a Question"
//           style={{ color: "#53aef2" }}
//           onKeyDown={onEnterPress}
//         />

//         <Button onClick={handleInputSubmit}>
//           <FontAwesomeIcon
//             icon={faPaperPlane}
//             style={{ fontSize: "20px", color: "#53aef2" }}
//           />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ChatsContainer;

import React, { useState, useRef, useCallback, useContext } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { queryChat } from "../../apis/chat.api";
import { ChatContext } from "../../chatContext";
import { MessageFrom, MessageGen } from "../genericChatModules/message.type";
import { ChimeraLogo } from "../genericChatModules/icons/logo";
import { ENUM, useUITheme } from "../../updated_version/Context/themeContext";
import ChatList from "../genericChatModules/ChatList";
import InputUpload from "../genericChatModules/components/QueryInput";

const ChatRoom = () => {
  const { aristotleGenie } = useContext(ChatContext);
  const { messages, addNewMessage } = aristotleGenie;
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
      const queryResult = await queryChat(textQuery);
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
      sx={{
        flexGrow: 1,
        m: "auto",
        borderRadius: 2,
        bgcolor: "var(--color-input-light)",
        opacity:1,
        boxShadow:2
      }}
      width={"350px"}
    >
      <Box display="flex" justifyContent="flex-end" p={1}>
        <Box alignSelf={"center"} width={"100%"} bgcolor={"var(--color-accent-lighter2)"} borderRadius={2} p={1}>
          <Typography
            variant="h5"
            textAlign={"center"}
            sx={{
              fontWeight: "bold",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              color: "var(--color-accent)",
              fontFamily: "var(--fontFamily)",
            }}
          >
            Chimera Genie
          </Typography>
        </Box>
        <Divider variant="fullWidth"/>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        p={1}
        sx={{ overflow: "hidden" }}
      >
        <Box
          flexGrow={1}
          display="flex"
          flexDirection="column"
          justifyContent={"flex-end"}
          maxHeight={380}
          height={380}
          position={"relative"}
        >
          <ChatList
            chatData={messages}
            isThinking={isThinking}
            file={undefined}
          />
        </Box>
        <Box
          display="flex"
          alignItems="flex-start"
          width={"100%"}
          m={"0px auto"}
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
            placeholder={"Ask Chimera Genie"}
            isShowUpload={false}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatRoom;
