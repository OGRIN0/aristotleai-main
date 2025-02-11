import { createContext, useContext } from "react";

export const themeContext = createContext({
  theme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
  violetTheme: () => {},
  cyanTheme: () => {},
  blueTheme: () => {},
  limeTheme: () => {},
});

export default function useTheme() {
  return useContext(themeContext);
}
