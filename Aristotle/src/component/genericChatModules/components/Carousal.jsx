import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Typography, makeStyles } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  carousel: {
    display: "flex",
    overflow: "hidden",
    width: "100%", // Adjust width as needed
    position: "relative",
  },
  carouselItem: {
    minWidth: "100%", // Ensure items fill the carousel width
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Center content within items
  },
  carouselItemImg: {
    width: "100%", // Adjust image width as needed
    height: "auto", // Maintain aspect ratio
    objectFit: "cover",
  },
  arrowContainer: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)", // Center arrows vertically
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    zIndex: 1, // Ensure arrows are above carousel items
  },
  arrowButton: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust button style as needed
    color: "white",
    padding: theme.spacing(1),
    cursor: "pointer",
    transition: theme.transitions.create("background-color", {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust hover style as needed
    },
  },
}));

const Carousel = ({ items }) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return items.length - 1; // Wrap around to last item on previous click
      }
      return prevIndex - 1;
    });
  };

  const itemVariants = {
    initial: { x: "-100%" }, // Start items offscreen to the left
    enter: (direction) => ({
      x: direction === "left" ? "100%" : "-100%", // Slide in from specified direction
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }, // Adjust transition duration as needed
    },
    exit: (direction) => ({
      x: direction === "left" ? "-100%" : "100%", // Slide out to specified direction
      opacity: 0,
      transition: { duration: 0.3 }, // Adjust transition duration for exit animation
    }),
  };

  return (
    <div className={classes.carousel} ref={carouselRef}>
      <AnimatePresence initial={false} mode="wait">
        {items.map((item, index) => {
          const direction = index < currentIndex ? "left" : "right";
          return (
            <motion.div
              key={item.id || index}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              className={classes.carouselItem}
            >
              {/* {item.type === 'image' && (
                <img src={item.src} alt={item.alt || ''} className={classes.carouselItemImg} />
              )}
              Add components for other item types (e.g., video, text) */}
              <span>
                 {item?.iconComponent}
              </span>
              <Typography
                variant="h4"
                sx={{ fontSize: 14, fontFamily: "var(--fontFamily)" }}
              >
                {item?.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  wordBreak: "keep-all",
                  fontSize: 12,
                  fontFamily: "var(--fontFamily)",
                }}
              >
                {item?.description}
              </Typography>
            </motion.div>
          );
        })}
      </AnimatePresence>
      <div className={classes.arrowContainer}>
        <div className={classes.arrowButton} onClick={handlePrevClick}>
          <ArrowBackIosIcon />
        </div>
        <div className={classes.arrowButton} onClick={handleNextClick}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
