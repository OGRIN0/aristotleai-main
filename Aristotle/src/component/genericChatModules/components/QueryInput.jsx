import React from "react";
import { CircularProgress, IconButton, TextField, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { ENUM, useUITheme } from "../../../updated_version/Context/themeContext";

function InputUpload({
  fileInputRef,
  handleFileUpload,
  handleFileButtonClick,
  query,
  setQuery,
  handleSubmit,
  setIsInputFocused,
  isThinking,
  placeholder,
  isShowUpload,
  supportFileType,
}) {
  const { theme } = useUITheme();
  const cursorColor = theme === ENUM.LIGHT ? "#000000" : "#FFFFFF";

  const handleEnterInput = (event) => {
    if (!isThinking) {
      if (event.key === "Enter") handleSubmit();
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexGrow={1}
      pr={1}
      position="relative"
      zIndex={1}
    >
      {isShowUpload && handleFileUpload && handleFileButtonClick ? (
        <React.Fragment>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
            accept={supportFileType ?? ""}
            disabled={isThinking}
          />
          <IconButton onClick={handleFileButtonClick} sx={{ m: 1, p: 0.3 }}>
            <AttachFileIcon className="tw-text-dark-accent4" fontSize="small" />
          </IconButton>
        </React.Fragment>
      ) : null}
      <TextField
        fullWidth
        variant="outlined"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleEnterInput}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
        placeholder={placeholder}
        sx={{
          position: "relative",
          zIndex: 1,
          flexGrow: 1,
        }}
        InputProps={{
          endAdornment: (
            <div className="tw-mr-1">
              <IconButton
                onClick={handleSubmit}
                disabled={query?isThinking:!isThinking}
                sx={{ color: "var(--color-accent) !important" }}
              >
                {isThinking ? (
                  <CircularProgress
                    size={16}
                    sx={{ color: "var(--color-accent) !important" }}
                  />
                ) : (
                  <SendIcon fontSize="small" />
                )}
              </IconButton>
            </div>
          ),
          sx: {
            color:
              theme === ENUM.LIGHT
                ? "var(--color-dark-bg)"
                : "var(--color-light-bg)",
            bgcolor:
              theme === ENUM.LIGHT
                ? "var(--color-input-light)"
                : "var(--color-input-dark)",
            borderRadius: 12,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "&>input": {
              boxSizing: "inherit",
              caretColor: cursorColor,
            },
            height: "36px",
            paddingRight: 0,
            fontSize: 12,
          },
        }}
      />
    </Box>
  );
}

export default InputUpload;
