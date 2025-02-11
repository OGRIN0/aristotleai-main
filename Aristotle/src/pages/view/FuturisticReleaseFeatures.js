import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  styled,
  CardContent,
} from "@mui/material";
import { ENUM, useUITheme } from "../../updated_version/Context/themeContext";
import { motion } from "framer-motion";
import { CategoriesLogo } from "../../component/genericChatModules/icons/logo";
import CustomCard from "../../component/genericChatModules/components/customCard";

const ChatRoom = () => {
  const { theme } = useUITheme();
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const features = [
    {
      title: "Mixture of Experts (MoE)",
      description:
        "An advanced type of neural network architecture that combines multiple 'experts,' each specializing in certain aspects of the data or task. A gating mechanism determines which expert(s) to use for a given input, enhancing model performance and efficiency.",
    },
    {
      title: "Prompt Engineering SDK",
      description:
        "A toolkit for crafting prompts to elicit desired outputs from models, thereby enhancing the quality and relevance of the model's responses.",
    },
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let currentFeatureIndex = 0;
    const typingSpeed = 50;

    const typeText = () => {
      if (currentFeatureIndex < features.length) {
        const currentFeature = features[currentFeatureIndex];
        const fullText = `${currentFeature.title} ${currentFeature.description}`;

        if (currentIndex < fullText.length) {
          currentText += fullText[currentIndex];
          setTypedText(currentText);
          currentIndex++;
          setTimeout(typeText, typingSpeed);
        } else {
          currentFeatureIndex++;
          currentIndex = 0;
          currentText += "\n\n";
          setTimeout(typeText, typingSpeed);
        }
      } else {
        setIsTyping(false);
      }
    };

    typeText();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  const typingIndicatorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <Container
      maxWidth={"100%"}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Box display="flex" justifyContent="center" p={1} width={"100%"}>
          <Typography
            variant="h5"
            textAlign={"center"}
            mt={2}
            sx={{
              fontWeight: "bold",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              color: "var(--color-accent)",
              fontFamily: "var(--fontFamily)",
            }}
          >
            Futuristic Release Features
          </Typography>
        </Box>
        <Box
          sx={{ whiteSpace: "pre-line" }}
          width={"100%"}
          p={2}
          display={"flex"}
          gap={4}
          flex={1}
          mt={5}
          height={"80vh"}
          alignItems={"center"}
        >
          {/* <Typography
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            sx={{
              wordBreak: "keep-all",
              fontSize: 20,
              lineHeight: 1.8,
              fontFamily: "var(--fontFamily)",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              color: `${
                theme === ENUM.DARK
                  ? "var(--color-light-bg)"
                  : "var(--color-dark-bg)"
              }`,
            }}
          >
            {typedText}
          </Typography>
          {isTyping && (
            <Box
              component={motion.div}
              variants={typingIndicatorVariants}
              initial="hidden"
              animate="visible"
              sx={{
                fontSize: 20,
                lineHeight: 1.8,
                color: `${
                  theme === ENUM.DARK
                    ? "var(--color-light-bg)"
                    : "var(--color-dark-bg)"
                }`,
              }}
            >
              •••
            </Box>
          )} */}
          {/* <Carousel items={features}/> */}
          <CustomCard
            description={features[0].description}
            title={features[0].title}
          />
          <CustomCard
            description={features[1].description}
            title={features[1].title}
          />
        </Box>
      </motion.div>
    </Container>
  );
};

export default ChatRoom;
