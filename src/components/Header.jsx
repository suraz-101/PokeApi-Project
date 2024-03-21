import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Switch from "react-switch";

export const Header = () => {
  const { theme, ToggleTheme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <header>
        <span> I am {theme} theme</span>
        <span>
          <Switch
            // onChange={() => {
            //   setTheme(theme === "light" ? "dark" : "light");
            // }}

            onChange={ToggleTheme}
            checked={theme === "light"}
          />
        </span>
      </header>
    </>
  );
};
