import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ENUM, useUITheme } from "../Context/themeContext";
import { motion } from "framer-motion";
import {
  BankingBotLogo,
  BedrockAILogo,
  CharacterAILogo,
  ChatGPTLogo,
  DocumentGPTLogo,
  FinGPTLogo,
  FinanceLogo,
  FuturisticReleaseFeaturesLogo,
  GmailLogo,
  HRAILogo,
  HRDataAnalyticsLogo,
  HomeBrewnLogo,
  HybridLogo,
  LegalAILogo,
  MixtureOfExpertsLogo,
  RBACAILogo,
  RegulatoryBotLogo,
  RetailLogo,
  VertexAILogo,
  AzureOpenAILogo,
  MosaicAILogo,
} from "../../component/genericChatModules/icons/logo";

const linkObj = {
  "/view/home": {
    title: "Gmail Craft",
    icon: (width, height, fillColor) => (
      <GmailLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/home_brewn": {
    title: "Home Brewn",
    icon: (width, height, fillColor) => (
      <HomeBrewnLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/Finance": {
    title: "Finance",
    icon: (width, height, fillColor) => (
      <FinanceLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/Retail": {
    title: "Retail",
    icon: (width, height, fillColor) => (
      <RetailLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/Hybrid": {
    title: "Hybrid",
    icon: (width, height, fillColor) => (
      <HybridLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/gpt": {
    title: "GPT",
    icon: (width, height, fillColor) => (
      <ChatGPTLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/bedrock": {
    title: "Bedrock",
    icon: (width, height, fillColor) => (
      <BedrockAILogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/Vertex": {
    title: "VertexAI",
    icon: (width, height, fillColor) => (
      <VertexAILogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/CharacterAi": {
    title: "CharacterAI",
    icon: (width, height, fillColor) => (
      <CharacterAILogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/HRai": {
    title: "HRAI",
    icon: (width, height, fillColor) => (
      <HRAILogo widthProps={width} heightProps={height} fillColor={fillColor} />
    ),
  },
  "/view/LegalAI": {
    title: "LegalAI",
    icon: (width, height, fillColor) => (
      <LegalAILogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/HrDataAnalytics": {
    title: "HR Data Analytics",
    icon: (width, height, fillColor) => (
      <HRDataAnalyticsLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/BankingBot": {
    title: "BankingBot",
    icon: (width, height, fillColor) => (
      <BankingBotLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/RegulatoryBot": {
    title: "RegulatoryBot",
    icon: (width, height, fillColor) => (
      <RegulatoryBotLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/FinGPT": {
    title: "FinGPT",
    icon: (width, height, fillColor) => (
      <FinGPTLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/AzureOpenAI": {
    title: "AzureOpenAI",
    icon: (width, height, fillColor) => (
      <AzureOpenAILogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/MosaicAI": {
    title: "MosaicAI",
    icon: (width, height, fillColor) => (
      <MosaicAILogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/Documentgpt": {
    title: "DocumentGPT",
    icon: (width, height, fillColor) => (
      <DocumentGPTLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  // "/view/TestcaseLLM": {
  //   title: "Testing AI",
  //   icon: (width, height, fillColor) => (
  //     <DocumentGPTLogo
  //       widthProps={width}
  //       heightProps={height}
  //       fillColor={fillColor}
  //     />
  //   ),
  // },
  "/view/RbacllmVersion2": {
    title: "AI Governance",
    icon: (width, height, fillColor) => (
      <RBACAILogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/Rbacllm_clone": {
    title: "GovernanceAI",
    icon: (width, height, fillColor) => (
      <RBACAILogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/MoE": {
    title: "Mixture of Experts",
    icon: (width, height, fillColor) => (
      <MixtureOfExpertsLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
  "/view/FuturisticReleaseFeatures": {
    title: "Futuristic Release Features",
    icon: (width, height, fillColor) => (
      <FuturisticReleaseFeaturesLogo
        widthProps={width}
        heightProps={height}
        fillColor={fillColor}
      />
    ),
  },
};

const SideNav = ({ open, onClose }) => {
  const { theme } = useUITheme();
  const location = useLocation();

  return (
    <Drawer
      variant="persistent"
      open={open}
      onClose={onClose}
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          backgroundColor:
            theme === ENUM.LIGHT
              ? "var(--color-light-bg)"
              : "var(--color-dark-bg)",
          color:
            theme === ENUM.LIGHT
              ? "var(--color-dark-bg)"
              : "var(--color-light-bg)",
          borderRight: `1px solid var(--color-accent-lighter2)`,
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "var(--color-accent-lighter3)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor:
              theme === ENUM.LIGHT
                ? "var(--color-light-bg)"
                : "var(--color-dark-bg)",
          },
        },

      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
        }}
      >
        <Link to={"/"} className="tw-flex tw-ml-1 tw-items-center">
          <img
            src="../../assets/img/brand/logo.png"
            className="tw-w-12 tw-h-12"
          />
          <Typography
            sx={{
              fontWeight: "600",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              ml: 1,
              fontFamily: "Inter",
              fontSize: 16,
              color: `${
                theme === ENUM.DARK
                  ? "var(--color-light-bg)"
                  : "var(--color-dark-bg)"
              }`,
            }}
            variant="caption"
          >
            ChimeraAI
          </Typography>
        </Link>
      </Box>
      <Divider
        variant="fullWidth"
        sx={{
          bgcolor: "var(--color-accent-lighter2)",
          height: 2,
        }}
      />
      <List sx={{ pr: 1, display: "flex", flexDirection: "column", gap: 0.5 }}>
        {Object.entries(linkObj).map(([path, { title, icon }]) => (
          <motion.div
            key={path}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <ListItem
              component={Link}
              to={path}
              disableRipple
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor:
                  path === location.pathname
                    ? "var(--color-accent-lighter3)"
                    : "inherit",
                position: "relative",
                "&:hover": {
                  backgroundColor: "var(--color-accent-lighter3)",
                  color:
                    path !== location.pathname
                      ? theme === ENUM.LIGHT
                        ? "var(--color-dark-bg)"
                        : "var(--color-light-bg)"
                      : theme === ENUM.LIGHT
                      ? "var(--color-light-bg)"
                      : "var(--color-dark-bg)",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  height: "100%",
                  width: 10,
                  borderTopLeftRadius: 6,
                  borderBottomLeftRadius: 6,
                  backgroundColor:
                    path === location.pathname
                      ? "var(--color-accent)"
                      : "transparent",
                },
                color:
                  path === location.pathname
                    ? theme === ENUM.LIGHT
                      ? "var(--color-dark-bg)"
                      : "var(--color-light-bg)"
                    : theme === ENUM.DARK
                    ? "var(--color-light-bg)"
                    : "var(--color-dark-bg)",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
                fontFamily: "var(--fontFamily)",
              }}
            >
              <Typography
                primary={title}
                title={title}
                sx={{
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "var(--fontFamily)",
                  color:
                    path === location.pathname
                      ? theme === ENUM.LIGHT
                        ? "var(--color-light-bg)"
                        : "var(--color-dark-bg)"
                      : theme === ENUM.LIGHT
                      ? "var(--color-dark-bg)"
                      : "var(--color-light-bg)",
                  wordBreak: "keep-all !important",
                }}
              >
                {title}
              </Typography>
              {icon && (
                <div style={{ marginRight: 20 }}>
                  {icon(
                    "26px",
                    "26px",
                    `${
                      path === location.pathname
                        ? theme === ENUM.LIGHT
                          ? "var(--color-light-bg)"
                          : "var(--color-dark-bg)"
                        : theme === ENUM.LIGHT
                        ? "var(--color-dark-bg)"
                        : "var(--color-light-bg)"
                    }`
                  )}
                </div>
              )}
            </ListItem>
            <Divider variant="middle" component={"li"} />
          </motion.div>
        ))}
      </List>
    </Drawer>
  );
};

export default React.memo(SideNav);
