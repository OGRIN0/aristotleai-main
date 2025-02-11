import React from "react";
import { Box } from "@mui/material";

export function Loading({ side }) {
  return (
    <Box
      display="flex"
      justifyContent={`flex-end`}
      alignItems="center"
      alignSelf={`flex-${side}`}
      mt={2}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          animation: "fade 1.5s infinite ease-in-out",
          "@keyframes fade": {
            "0%, 100%": { opacity: 0.2 },
            "50%": { opacity: 1 },
          },
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            bgcolor: "var(--color-accent)",
            borderRadius: "50%",
            margin: "0 2px",
            animation: "fade 1.5s infinite ease-in-out 0.3s",
          }}
        />
        <Box
          sx={{
            width: 6,
            height: 6,
            bgcolor: "var(--color-accent)",
            borderRadius: "50%",
            margin: "0 2px",
            animation: "fade 1.5s infinite ease-in-out 0.6s",
          }}
        />
        <Box
          sx={{
            width: 6,
            height: 6,
            bgcolor: "var(--color-accent)",
            borderRadius: "50%",
            margin: "0 2px",
            animation: "fade 1.5s infinite ease-in-out 0.9s",
          }}
        />
      </Box>
    </Box>
  );
}
