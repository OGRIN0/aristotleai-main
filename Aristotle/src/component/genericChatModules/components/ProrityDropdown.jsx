import React from "react";
import {
  ENUM,
  useUITheme,
} from "../../../updated_version/Context/themeContext";
import { Menu, MenuItem } from "@mui/material";

export function MenuComponent({
  open,
  selectedValueHandler,
  anchorEl,
  handleClose,
  menuOptions,
  selectedValue,
}) {
  const { theme } = useUITheme();
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          sx: {
            width: 200,
            background:
              theme === ENUM.LIGHT
                ? "var(--color-light-bg)"
                : "var(--color-dark-bg)",
            color:
              theme === ENUM.LIGHT
                ? "var(--color-dark-bg)"
                : "var(--color-light-bg)",
            ul: {
              paddingTop: "0px !important",
              paddingBottom: "0px !important",
            },
            li: {
              margin: "5px",
              borderRadius: 1,
            },
          },
        },
      }}
    >
      {menuOptions.map((option) => (
        <MenuItem
          key={option.label}
          onClick={() => {
            selectedValueHandler(option);
            handleClose();
          }}
          sx={{
            position: "relative",
            "&:hover": {
              backgroundColor: "var(--color-accent-lighter3)",
              color:
                theme === ENUM.LIGHT
                  ? "var(--color-dark-bg)"
                  : "var(--color-light-bg)",
            },
            background:
              selectedValue.value === option.value
                ? "var(--color-accent)"
                : "transparent",
            color:
              theme === ENUM.LIGHT
                ? "var(--color-dark-bg)"
                : "var(--color-light-bg)",
            fontSize: 14,
            fontWeight:
              selectedValue.value === option.value ? "bold" : "normal",
            fontFamily:"var(--fontFamily)"
          }}
        >
          {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
}
