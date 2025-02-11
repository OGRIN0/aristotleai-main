import React, { useState, useCallback, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Switch,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Badge,
  Popover,
  Typography,
  Divider,
  styled,
  Alert,
  Box,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ENUM, useUITheme } from "../Context/themeContext";
import { Link } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { ChatContext } from "../../chatContext";
import useAuth from "../../service/Auth";

const userSettings = [
  {
    name: "Logout",
    path: "/",
    beforeProcess: async (logout) => {
      if (logout) logout();
    },
  },
  { name: "Profile", path: "/" },
  { name: "My Account", path: "/" },
];

const CustomDivider = styled(Divider)(({ theme }) => ({
  "&": {
    color: "transparent",
    height: "2rem !important",
    borderRadius: 2,
    mt: 2,
    boxShadow: `var(--color-accent-rgba) 2px 1px 10px 1px, var(--color-accent-rgba2) 2px 0px 0px 1px`,
  },
}));

const TopBar = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useUITheme();
  const [anchorAccountEl, setAnchorAccountEl] = useState(null);
  const [anchorNotificationEl, setAnchorNotificationEl] = useState(null);
  const { applicationState } = useContext(ChatContext);
  const { notification } = applicationState;
  const { list, removeNotification } = notification;
  const openAvatar = Boolean(anchorAccountEl);
  const openNotification = Boolean(anchorNotificationEl);
  const { logout } = useAuth();
  const idNotification = openNotification ? "notification-popover" : undefined;
  const handleAvatarClick = useCallback((event) => {
    setAnchorAccountEl(event.currentTarget);
  }, []);

  const handleNotificationClick = useCallback((event) => {
    setAnchorNotificationEl(event.currentTarget);
  }, []);

  const handleAvatarClose = useCallback(() => {
    setAnchorAccountEl(null);
  }, []);

  const handleNotificationClose = useCallback(() => {
    setAnchorNotificationEl(null);
  }, []);

  const handleSelectItem = async (executableHandler) => {
    console.log(executableHandler, "EXECUTA");
    if (executableHandler) await executableHandler();
    handleNotificationClose();
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor:
          theme === ENUM.LIGHT
            ? "var(--color-light-bg)"
            : "var(--color-dark-bg)",
        borderRadius: 8,
        boxShadow: `var(--color-accent-rgba2) 0px 1px 5px 0px, var(--color-accent-rgba) 0px 0px 0px 1px`,
      }}
      elevation={0}
      enableColorOnDark
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="Menu">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onMenuClick}
              sx={{
                borderRadius: "50%",
                boxShadow: `var(--color-accent-rgba2) 0px 1px 5px 0px, var(--color-accent-rgba) 0px 0px 0px 1px`,
              }}
            >
              <MenuOpenIcon
                className="tw-text-light-accent4"
                fontSize="small"
              />
            </IconButton>
          </Tooltip>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            justifyContent: "space-evenly",
          }}
        >
          <Tooltip title="Toggle Theme">
            <Switch
              checked={theme === ENUM.DARK}
              onChange={toggleTheme}
              color={
                theme === ENUM.DARK ? "var(--color-accent-lighter2)" : "default"
              }
              sx={{
                "& .MuiSwitch-thumb": {
                  color: "var(--color-accent-lighter3)",
                  backgroundColor: "var(--color-accent-lighter2)",
                },
                "& .MuiSwitch-track": {
                  backgroundColor: "var(--color-accent-lighter3)",
                  color: "var(--color-accent-lighter2)",
                },
                mx: 2,
              }}
              inputProps={{ "aria-label": "theme switch" }}
            />
          </Tooltip>
          <CustomDivider
            orientation="vertical"
            flexItem
            variant="middle"
            sx={{}}
          />
          {/* </div> */}
          <Tooltip title="Notifications">
            <IconButton
              onClick={handleNotificationClick}
              sx={{ mx: 2 }}
              disableTouchRipple
              disableRipple
            >
              <Badge
                badgeContent={list?.length}
                sx={{
                  "& .MuiBadge-badge": {
                    bgcolor: "var(--color-accent)",
                    fontFamily: " var(--fontFamily)",
                    color: `${
                      theme === ENUM.DARK
                        ? "var(--color-light-bg)"
                        : "var(--color-dark-bg)"
                    }`,
                  },
                }}
              >
                <NotificationsIcon
                  sx={{ color: "var(--color-accent-lighter2)" }}
                />
              </Badge>
            </IconButton>
          </Tooltip>
          <Popover
            id={idNotification}
            open={openNotification}
            anchorEl={anchorNotificationEl}
            onClose={handleNotificationClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{
              "&.MuiPopover-root": {
                ".MuiPaper-root": {
                  minWidth: "30%",
                },
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "cetner",
              gap: 2,
            }}
          >
            {list.length > 0 ? (
              list.map(
                ({ message, severity, image, title, timestamp }, index) => (
                  <Box
                    key={index}
                    sx={{ m: 1, display: "flex", alignItems: "center" }}
                    bgcolor={`var(--color-accent-lighter2)`}
                    borderRadius={2}
                    position={"relative"}
                  >
                    <IconButton
                      sx={{ position: "absolute", top: 0, right: -3 }}
                      onClick={removeNotification(index + 1)}
                    >
                      <Close fontSize="small" />
                    </IconButton>
                    <Avatar
                      src={image}
                      alt={title}
                      sx={{ m: 1, fontSize: 10 }}
                    />
                    <Box>
                      <Typography
                        variant="body1"
                        sx={{
                          mt: 0.5,
                          fontWeight: "bold",
                          fontSize: 12,
                          fontFamily: "var(--fontFamily)",
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          fontSize: 14,
                          fontFamily: "var(--fontFamily)",
                        }}
                      >
                        {message}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.disabled",
                          fontSize: 10,
                          fontFamily: "var(--fontFamily)",
                        }}
                      >
                        {new Date(timestamp).toLocaleDateString()} ago
                      </Typography>
                    </Box>
                    {index < list.length - 1 && <Divider sx={{ my: 1 }} />}
                  </Box>
                )
              )
            ) : (
              <Alert
                className="tw-text-dark-accent4"
                sx={{
                  bgcolor: "var(--color-accent-lighter2)",
                }}
                severity="info"
              >
                No new notifications
              </Alert>
            )}
          </Popover>
          <CustomDivider orientation="vertical" flexItem variant="middle" />
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleAvatarClick}
              sx={{ mx: 2 }}
              disableTouchRipple
              disableRipple
            >
              <Avatar alt="User Avatar" />
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
      <Menu
        anchorEl={anchorAccountEl}
        open={openAvatar}
        onClose={handleAvatarClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
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
        {userSettings.map(({ name, path, beforeProcess }) => (
          <MenuItem
            sx={{
              position: "relative",
              "&:hover": {
                backgroundColor: "var(--color-accent-lighter3)",
                color:
                  theme === ENUM.LIGHT
                    ? "var(--color-dark-bg)"
                    : "var(--color-light-bg)",
              },
              color:
                theme === ENUM.LIGHT
                  ? "var(--color-dark-bg)"
                  : "var(--color-light-bg)",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "var(--fontFamily)",
            }}
            key={name}
            onClick={() =>
              handleSelectItem(
                beforeProcess ? beforeProcess.bind(null, logout) : null
              )
            }
          >
            <Link
              to={path}
              style={{
                color:
                  theme === ENUM.LIGHT
                    ? "var(--color-dark-bg)"
                    : "var(--color-light-bg)",
                textDecoration: "none",
              }}
            >
              {name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default React.memo(TopBar);
