// import React, {
//   useRef,
//   useState,
//   useEffect,
//   Component,
//   createContext,
// } from "react";
// import { ChatHeader, ChatContainer, ChatInput } from "../../component/ChatRoom";
// import ApiService from "../../service/Api.service";
// import AIChatContainer from "../../component/CharacterAI/AIChatContainer";
// import COMP from "../../component/AdminLayout/AdminLayout";
// import { useLocation } from "react-router-dom";
import Chat from "../../component/Chatbot/Chat";
// import axios from "axios";
// // import "../../style.css";
// import queryString from "query-string";

// import useTheme from "../../context";

// // export const themeContext = React.createContext({});

// export default function CharacterChat() {
//   const { theme, darkTheme, lightTheme, violetTheme } = useTheme();
//   const location = useLocation();
//   const { search } = location;
//   const parsed = queryString.parse(search);
//   console.log(parsed.desc);

//   const { name, desc } = parsed;

//   // const [theme, setTheme] = React.useState("light");

//   // TODO: Implement Redux and improve theme
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const inputref = useRef(null);
//   // const location = useLocation();

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
//     let gaiRes = await axios.get(`http://localhost:8000/bedrock/${data}`);
//     let response = gaiRes;
//     console.log("data from bed", response["data"]);
//     setData((cr) => [
//       ...cr,
//       {
//         from: "llm",
//         message: response.data.completion,
//       },
//     ]);
//   };

//   const bottomref = useRef(null);
//   useEffect(() => {
//     bottomref.current?.scrollIntoView({ behavior: "smooth" });
//   }, [data]);

//   //TODO add a fab to scroll up to the top
//   return (
//     // <themeContext.Provider value={{ theme }}>
//       <div id={theme}>
//         {/* <COMP /> */}
//         <div className="  tw-w-full tw-h-[100vh] tw-relative  tw-flex tw-flex-col">
//           <div className="tw-flex tw-flex-col tw-min-h-[100vh] tw-overflow-y-auto tw-pb-32 tw-scrollbar-thin tw-scrollbar-thumb-gray-600 tw-scrollbar-track-theme-black tw-scrollbar-thumb-rounded-md">
//             {/* {show ? <ChatHeader initial_model={location.state.name} /> : <></>} */}
//             {show ? <ChatHeader initial_model={name} /> : <></>}
//             <div style={{ marginLeft: "20rem", marginTop: "5rem" }}>
//               <AIChatContainer
//                 // message={location.state.desc}
//                 message={desc}
//                 image="/assets/icons/bedrock.svg"
//               />
//             </div>
//             <div
//               style={{ width: "150vh", marginLeft: "20rem", marginTop: "10px" }}
//             >
//               <ChatContainer
//                 chatdata={data}
//                 image="/assets/icons/bedrock.svg"
//               />
//             </div>

//             <div ref={bottomref} />
//           </div>

//           <ChatInput
//             input={inputref}
//             handleSubmit={handleInputSubmit}
//             style={{ color: "white" }}
//           />
//           <div>
//             <Chat />
//           </div>
//         </div>
//       </div>
//     // </themeContext.Provider>
//   );
// }

import React, {
  useState,
  useRef,
  useCallback,
  useContext,
  useEffect,
} from "react";
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
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { queryCharacterAIBot } from "../../apis/characterChat.api";

const CharacterChat = () => {
  const location = useLocation();
  const { search } = location;
  const parsed = qs.parse(search);
  const { name, desc } = parsed;
  const { charactersAI } = useContext(ChatContext);
  console.log(name, "NAME")
  const { messages, addNewMessage, removeOne } = charactersAI[name.trim()];
  const [query, setQuery] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [error, setError] = useState(null);
  const { theme } = useUITheme();

  useEffect(()=>{
    if(name){
        if(messages.length===0){
            addNewMessage(new MessageGen("text", MessageFrom.AI, desc));
        }
    }
  },[name])

  //AJAX When Click Button Or Enter //
  const handleSubmitQueryOrUpload = useCallback(async () => {
    setIsThinking(true);
    setError(null);
    if (query.trim()) {
      const textQuery = query.trim();
      addNewMessage(new MessageGen("text", MessageFrom.USER, textQuery));
      setQuery("");
      const queryResult = await queryCharacterAIBot(textQuery);
      queryResult.match({
        Ok: (data) => {
          addNewMessage(
            new MessageGen("text", MessageFrom.AI, data)
          );
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
              mt: 6,
            }}
          >
            {name}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        sx={{ overflow: "hidden" }}
      >
        <Box
          p={2}
          flexGrow={1}
          display="flex"
          flexDirection="column"
          justifyContent={"flex-end"}
          maxHeight={420}
          height={420}
          position={"relative"}
        >
          <Box
            position={"absolute"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            top={"25px"}
            left={0}
            zIndex={-2}
            alignSelf={"center"}
            justifySelf={"center"}
            m={"auto"}
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
          />
        </Box>
        <Box
          display="flex"
          alignItems="flex-end"
          width={"70%"}
          m={"0px auto"}
          mt={5}
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
            placeholder={"Message " + name}
            isShowUpload={false}
          />
        </Box>
      </Box>
      <Chat />
    </Box>
  );
};

export default CharacterChat;
