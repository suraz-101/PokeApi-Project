import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const ToggleTheme = () => {
    const result = theme === "light" ? "dark" : "light";
    return setTheme(result);
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
