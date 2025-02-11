// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { ChatHeader, ChatContainer, ChatInput } from "../../component/ChatRoom";
// import Chat from "../../component/Chatbot/Chat";
// import CharacterList from "../../component/CharacterAI/CharacterLIst";
// import narendramodi from "../../component/CharacterAI/narendramodi.png";
// import elonmusk from "../../component/CharacterAI/elonmusk.png";
// import joebiden from "../../component/CharacterAI/joebiden.png";
// import hoong from "../../component/CharacterAI/lee.png";
// import "../view/comp.css";

// export default function ChatRoom() {
//   const navigate = useNavigate();
//   const handleElon = () => {
//     navigate("/characterai/chat?name=Elon Musk&desc=Hello This is Elon Musk!", {
//       // state: { name: "Elon Musk", desc: "Hello This is Elon Musk!" },
//     });
//   };
//   const handleBiden = () => {
//     navigate("/characterai/chat?name=JoeBiden&desc=Hello I'm Joe Biden", {
//       // state: { name: "JoeBiden", desc: "Hello I'm Joe Biden" },
//     });
//   };
//   const handleModi = () => {
//     navigate(
//       "/characterai/chat?name=NarendraModi&desc=Hello I'm Narendra Modi",
//       {
//         // state: { name: "NarendraModi", desc: "Hello I'm Narendra Modi" },
//       }
//     );
//   };
//   const handleHoong = () => {
//     navigate(
//       "/characterai/chat?name=Lee Hsien Loong&desc=Hello I'm Lee Hsien Loong",
//       {
//         // state: { name: "Lee Hsien Loong", desc: "Hello I'm Lee Hsien Loong" },
//       }
//     );
//   };

//   return (
//     <div>
//       <div>
//         <div className="tw-w-full tw-h-[100vh] tw-relative tw-flex tw-flex-col">
//           <div className="tw-flex tw-flex-col tw-min-h-[100vh] tw-overflow-y-auto tw-pb-32 tw-scrollbar-thin tw-scrollbar-thumb-gray-600 tw-scrollbar-track-theme-black tw-scrollbar-thumb-rounded-md">
//             <ChatHeader initial_model="CHARACTER AI" />
//             <div className="characterList">
//               <CharacterList
//                 Name={"Elon Musk"}
//                 Desc={"Tesla"}
//                 img={elonmusk}
//                 onClick={handleElon}
//               />
//               <CharacterList
//                 Name={"Joe Biden"}
//                 Desc={"President"}
//                 img={joebiden}
//                 onClick={handleBiden}
//               />
//               <CharacterList
//                 Name={"Narendra Modi"}
//                 Desc={"Prime Minister"}
//                 img={narendramodi}
//                 onClick={handleModi}
//               />
//               <CharacterList
//                 Name={"Lee Hsien Loong"}
//                 Desc={"Prime Minister"}
//                 img={hoong}
//                 onClick={handleHoong}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  CssBaseline,
  Typography,
  Grid,
  Paper,
  Avatar,
} from "@mui/material";
import { ChatHeader, ChatContainer, ChatInput } from "../../component/ChatRoom";
import Chat from "../../component/Chatbot/Chat";
// import CharacterList from "../../component/CharacterAI/CharacterList";
import narendramodi from "../../component/CharacterAI/narendramodi.png";
import elonmusk from "../../component/CharacterAI/elonmusk.png";
import joebiden from "../../component/CharacterAI/joebiden.png";
import hoong from "../../component/CharacterAI/lee.png";
// import "../view/comp.css";

export default function ChatRoom() {
  const navigate = useNavigate();
  const handleElon = () => {
    navigate(
      "/characterai/chat?name=ElonMusk&desc=Hello This is Elon Musk!",
      {}
    );
  };
  const handleBiden = () => {
    navigate("/characterai/chat?name=JoeBiden&desc=Hello I'm Joe Biden", {});
  };
  const handleModi = () => {
    navigate(
      "/characterai/chat?name=NarendraModi&desc=Hello I'm Narendra Modi",
      {}
    );
  };
  const handleHoong = () => {
    navigate(
      "/characterai/chat?name=LeeHsienLoong&desc=Hello I'm Lee Hsien Loong",
      {}
    );
  };

  return (
    <Container
      component="main"
      maxWidth="100%"
      sx={{ display: "flex", flexDirection: "column", p: 2 }}
    >
      <CssBaseline />
      <Box sx={{ flex: 1 }}>
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
            }}
          >
            CharacterAI
          </Typography>
          <Typography
            variant="h6"
            textAlign={"center"}
            sx={{
              fontWeight: "500",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              color: "var(--color-accent)",
              fontFamily: "var(--fontFamily)",
              mt: 2,
              mb: 2,
            }}
          >
            Opt for Distinguished Persona
          </Typography>
        </Box>

        <Grid
          container
          spacing={1}
          display={"flex"}
          m="auto"
          gap={10}
        >
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              onClick={handleElon}
              sx={{
                p: 2,
                textAlign: "center",
                cursor: "pointer",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                minHeight: 300,
                minWidth: 200,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Elon Musk"
                src={elonmusk}
                sx={{ width: 100, height: 100, margin: "0 auto 8px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "var(--fontFamily)",
                }}
              >
                Elon Musk
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "var(--fontFamily)",
                }}
              >
                Tesla
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              onClick={handleBiden}
              sx={{
                p: 2,
                textAlign: "center",
                cursor: "pointer",
                minHeight: 300,
                minWidth: 200,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Joe Biden"
                src={joebiden}
                sx={{ width: 100, height: 100, margin: "0 auto 8px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "var(--fontFamily)",
                }}
              >
                Joe Biden
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "var(--fontFamily)",
                }}
              >
                President
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              onClick={handleModi}
              sx={{
                p: 2,
                textAlign: "center",
                cursor: "pointer",
                minHeight: 300,
                minWidth: 200,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Narendra Modi"
                src={narendramodi}
                sx={{ width: 100, height: 100, margin: "0 auto 8px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "var(--fontFamily)",
                  wordBreak: "keep-all",
                }}
              >
                Narendra Modi
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "var(--fontFamily)",
                }}
              >
                Prime Minister
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Paper
              onClick={handleHoong}
              sx={{
                p: 2,
                textAlign: "center",
                cursor: "pointer",
                minHeight: 300,
                minWidth: 200,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="Lee Hsien Loong"
                src={hoong}
                sx={{ width: 100, height: 100, margin: "0 auto 8px" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "var(--fontFamily)",
                }}
              >
                Lee Hsien Loong
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "var(--fontFamily)",
                }}
              >
                Prime Minister
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* <ChatContainer>
        <Chat />
        <ChatInput />
      </ChatContainer> */}
    </Container>
  );
}
