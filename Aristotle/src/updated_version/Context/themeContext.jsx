import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export class ENUM {
     static DARK = "dark";
     static LIGHT = 'light'
}

export const useUITheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : ENUM.LIGHT;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    document.body.className = theme === ENUM.LIGHT ? 'light-mode' : 'dark-mode';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === ENUM.LIGHT ? ENUM.DARK : ENUM.LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
