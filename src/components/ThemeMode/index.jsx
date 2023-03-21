import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const Context = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const onToggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const values = {
    theme,
    onToggleTheme,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

const useTheme = () => {
  const context = useContext(Context);

  if (typeof context === "undefined")
    throw new Error("Component must be consumped within ThemeProvider");

  return context;
};

export { ThemeProvider, useTheme };
