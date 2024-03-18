import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ChangeTheme = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  return (
    <>
      The theme is {theme}
      <button onClick={ToggleTheme}>Change Theme</button>
    </>
  );
};
