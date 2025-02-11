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
import { queryAzureOpenAI } from "../../apis/azureopenai.api";
import Chat from "../../component/Chatbot/Chat";


const ChatRoom = () => {
  const { AzureOpenAI } = useContext(ChatContext);
  const { messages, addNewMessage } = AzureOpenAI;
  const [query, setQuery] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [error, setError] = useState(null);
  const { theme } = useUITheme();

  const handleSubmitQueryOrUpload = useCallback(async () => {
    setIsThinking(true);
    setError(null);
    if (query.trim()) {
      const textQuery = query.trim();
      addNewMessage(new MessageGen("text", MessageFrom.USER, textQuery));
      setQuery("");
      const queryResult = await queryAzureOpenAI(textQuery);
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
            Bedrock
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
            placeholder={"Message AzureOpenAI"}
            isShowUpload={false}
          />
        </Box>
      </Box>
      <Chat/>
    </Box>
  );
};

export default ChatRoom;
