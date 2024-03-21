// import { useState } from "react";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ChangeTheme = () => {
  // const [mode, setMode] = useState("light");
  const { theme, ToggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
    // document.getElementById("division").className = mode;
  }, [theme]);

  return (
    <>
      <div id="division" className="ligth">
        <br />
        Theme : {theme}
        {/* <button
          onClick={() => {
            mode === "light" ? setMode("dark") : setMode("light");
          }}
        ></button> */}
        <button onClick={ToggleTheme}>Change Theme</button>
      </div>
    </>
  );
};
