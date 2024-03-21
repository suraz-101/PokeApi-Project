import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext(null); //creating context

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const ToggleTheme = () => {
    const result = theme === "light" ? "dark" : "light";
    return setTheme(result);
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// export const useStyle = () => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) throw new Error("Context not found");

//   return context;
// };
