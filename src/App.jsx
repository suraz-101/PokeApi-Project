import { Context } from "./components/Context";
import {
  DisplayProductsData,
  DisplayUsersData,
} from "./components/DisplayData";
import { Home } from "./components/Home";
import { ReverseCount } from "./components/Questions/Question";
import { ChangeTheme } from "./components/Theme";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";

const App = () => {
  const theme = useContext(ThemeContext);
  // const date = new Date("2024-10-11 10:00:00").toISOString();
  // console.log(date);
  return (
    <>
      <div>
        <ChangeTheme />
        <Home />
        <h1>Reverse {theme?.theme}</h1>
        <ReverseCount time={1} />
        <Context />

        <br />
        <DisplayProductsData id={1} />
        <DisplayUsersData id={2} />
      </div>
    </>
  );
};

export default App;
