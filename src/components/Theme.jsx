// import { useEffect } from "react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ChangeTheme = () => {
  const { theme, ToggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <br />
      Theme : {theme}
      <button onClick={ToggleTheme}>Change Theme</button>
    </>
  );
};
