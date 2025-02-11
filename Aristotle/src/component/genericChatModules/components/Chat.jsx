import React, { useMemo } from "react";
import { Box, Paper, Typography, Card, CardContent } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export function ChatMessage({ chat, file }) {
  const isUser = chat.from === "user";

  return (
    <Box
      display="flex"
      justifyContent={isUser ? "flex-end" : "flex-start"}
      mb={2}
    >
      <Paper
        elevation={3}
        sx={{
          p: 1,
          maxWidth: "70%",
          bgcolor: isUser ? "var(--color-accent)" : "background.paper",
          color: isUser ? "primary.contrastText" : "text.primary",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {chat.type === "file" ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems={"flex-end"}
            border="1px solid var(--color-accent)"
            borderRadius="5px"
          >
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: 150,
                maxHeight: 50,
                alignItems: "center",
                p: 1,
              }}
            >
              <CardContent sx={{ p: 0, m: 0 }}>
                <UploadFileIcon />
              </CardContent>
              <Typography
                variant="body1"
                fontSize={12}
                fontFamily={"var(--fontFamily)"}
              >
                {chat.message.name}
              </Typography>
            </Card>
          </Box>
        ) : chat.type === "error" ? (
          <Typography
            variant="body1"
            fontSize={12}
            className="tw-text-dark-accent"
            fontFamily={"var(--fontFamily)"}
            sx={{ wordBreak:"break-word" }}
          >
            {chat.message}
          </Typography>
        ) : (
          <Typography
            variant="body1"
            fontSize={12}
            fontFamily={"var(--fontFamily)"}
          >
            {chat.message}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
