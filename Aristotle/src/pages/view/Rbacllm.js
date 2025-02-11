// import React, { useRef, useState, useEffect, Component } from "react";
// import { ChatHeader, ChatContainer, ChatInput } from "../../component/ChatRoom";

// import UserDropdown from "../../component/RBAC/UserDropdown";
// import QueryInput from "../../component/RBAC/QueryInput";

// export default function ChatRoom() {
//   const [user, setUser] = useState(null); // Initially no user is selected
//   const [query, setQuery] = useState("");
//   const [fileName, setFileName] = useState('');

//   // TODO: Implement Redux and improve theme
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const inputref = useRef(null);

//   const [statusMessage, setStatusMessage] = useState('');

//   const handleFileUpload = async () => {
//     const fileInput = document.createElement('input');
//     fileInput.type = 'file';
//     fileInput.accept = '.csv';
//     fileInput.onchange = async (e) => {
//       const file = e.target.files[0];
//       const formData = new FormData();
//       formData.append('file', file);

//       try {
//         const response = await fetch('http://localhost:5000/load_data', { // Modify endpoint to localhost:5000
//           method: 'POST',
//           body: formData,
//         });

//         if (!response.ok) {
//           throw new Error('Failed to upload file');
//         }

//         const result = await response.json();
//         setFileName(file.name);
//         setStatusMessage(result.message);
//       } catch (error) {
//         setStatusMessage(`Error uploading file: ${error.message}`);
//       }
//     };

//     fileInput.click(); // Trigger file input dialog
//   };

//   const handleInputSubmit = async (e) => {
//     setShow(true);
//     e.preventDefault();
//     // console.log(inputref.current.value);
//     // if (inputref.current.value === "") return;
//     var data = query;
//     setData((cr) => [
//       ...cr,
//       {
//         from: "user",
//         message: data,
//       },
//     ]);

//     setQuery("");
//     let gaiRes = await fetch('http://localhost:5000/query', { // Modify endpoint to localhost:5000
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ user, query }), // Include user in the request body
//     });
//     const jsonData = await gaiRes.json();

//     setData((cr) => [
//       ...cr,
//       {
//         from: "llm",
//         message: jsonData.answer,
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
//               {show ? <ChatHeader initial_model="AI GOVERNANCE" /> : <></>}
//             </div>
//             <UserDropdown user={user} setUser={setUser} />
//             <ChatContainer
//               chatdata={data}
//               // image="https://static.wixstatic.com/media/4f187b_1613ecfd7d8d41dab1b2f23fb80b5e07%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4f187b_1613ecfd7d8d41dab1b2f23fb80b5e07%7Emv2.png"
//               image="/assets/icons/rbac.png"
//             />

//             <div ref={bottomref} />
//           </div>
//           <div className="query-container">

//             <QueryInput inputref={inputref} query={query} setQuery={setQuery} handleSubmit={handleInputSubmit} handleFileUpload={handleFileUpload} fileName={fileName} />
//           </div>
//           {/* <ChatInput
//             input={inputref}
//             handleSubmit={handleInputSubmit}
//             style={{ color: "white" }}
//           /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useCallback, useContext } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHorizOutlined";
import { ChatContext } from "../../chatContext";
import { ENUM, useUITheme } from "../../updated_version/Context/themeContext";
import { queryChat, uploadFile } from "../../apis/rbacLLM.api";
import { MenuComponent } from "../../component/genericChatModules/components/ProrityDropdown";
import ChatList from "../../component/genericChatModules/ChatList";
import InputUpload from "../../component/genericChatModules/components/QueryInput";
import {
  MessageFrom,
  MessageGen,
} from "../../component/genericChatModules/message.type";
import { ChimeraLogo } from "../../component/genericChatModules/icons/logo";

const menuOptions = [
  { label: "User", value: "user" },
  { label: "NIDeltaRole", value: "NIDeltaRole" },
  { label: "DLDeltaRole", value: "DLDeltaRole" },
];

const GovernanceAI = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(menuOptions[0]);
  const { Rbacllm } = useContext(ChatContext);
  const { messages, addNewMessage } = Rbacllm;
  const [query, setQuery] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [error, setError] = useState(null);
  const open = Boolean(anchorEl);
  const { theme } = useUITheme();

  //Handle to Open the Menu//
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);

  //Handler to Close Options Menu//
  const handleClose = () => setAnchorEl(null);

  //When User Select Options//
  const handleUserSelection = (user) => {
    setSelectedUser(user);
    handleClose();
  };

  //AJAX When Click Button or Enter //
  const handleSubmitQueryOrUpload = useCallback(async () => {
    setIsThinking(true);
    setError(null);
    if (file && query.trim()) {
      setQuery("");
      addNewMessage(new MessageGen("file", MessageFrom.USER, file));
      const uploadResult = await uploadFile(file);
      uploadResult.match({
        Ok: (data) => {
          addNewMessage(
            new MessageGen(
              "text",
              MessageFrom.AI,
              "This is a simulated response coming from GEN AI"
            )
          );
          setIsThinking(false);
          setFile(null);
          if (fileInputRef && fileInputRef.current)
            fileInputRef.current.value = "";
        },
        Err: (error) => {
          addNewMessage(new MessageGen("error", MessageFrom.AI, error));
          setIsThinking(false);
          setError(error);
          if (fileInputRef && fileInputRef.current)
            fileInputRef.current.value = "";
        },
      });
    } else if (query.trim() && file === null) {
      const textQuery = query.trim();
      addNewMessage(new MessageGen("text", MessageFrom.USER, textQuery));
      setQuery("");
      const queryResult = await queryChat(selectedUser.value, textQuery);
      queryResult.match({
        Ok: (data) => {
          addNewMessage(new MessageGen("text", MessageFrom.AI, data.answer));
          setIsThinking(false);
        },
        Err: (error) => {
          addNewMessage(new MessageGen("error", MessageFrom.AI, error));
          setError(error);
          setIsThinking(false);
        },
      });
    } else {
      setError("Please provide a query and/or file.");
      addNewMessage(new MessageGen("error", MessageFrom.USER, error));
      setIsThinking(false);
    }
  }, [query, file, selectedUser.value, addNewMessage]);

  //When file is uploaded
  const handleFileUpload = (event) => {
    if (event.target.files.length) {
      const uploadedFile = event.target.files[0];
      setFile(uploadedFile);
      setQuery(uploadedFile.name);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      sx={{ flexGrow: 1, m: "auto" }}
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
              ml: 5,
              fontFamily: "var(--fontFamily)",
            }}
          >
            AI Governance
          </Typography>
        </Box>
        <Tooltip title="Options">
          <IconButton onClick={handleMenuClick}>
            <MoreHorizIcon sx={{ color: "var(--color-accent)" }} />
          </IconButton>
        </Tooltip>
        <MenuComponent
          anchorEl={anchorEl}
          handleClose={handleClose}
          open={open}
          menuOptions={menuOptions}
          selectedValue={selectedUser}
          selectedValueHandler={handleUserSelection}
        />
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
          maxHeight={380}
          height={380}
          position={"relative"}
        >
          <Box
            position={"absolute"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            top={0}
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
          <ChatList chatData={messages} isThinking={isThinking} file={file} />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          width={"70%"}
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
            fileInputRef={fileInputRef}
            handleFileButtonClick={() =>
              fileInputRef.current ? fileInputRef.current.click() : null
            }
            handleFileUpload={handleFileUpload}
            handleSubmit={handleSubmitQueryOrUpload}
            isThinking={isThinking}
            query={query}
            setQuery={setQuery}
            setIsInputFocused={setIsInputFocused}
            placeholder={"Message Governance AI"}
            supportFileType={".csv"}
            isShowUpload={true}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GovernanceAI;
