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
import { Navbar } from "./components/Questions/Navbar";
import { Profile } from "./components/Questions/Profile";
import { Search } from "./components/Questions/Search";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import "./assets/css/App.css";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const style = {
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
    },
  };

  const themeStyle = {
    ...(theme === "light" ? style.light : style.dark),
  };

  // const date = new Date("2024-10-11 10:00:00").toISOString();
  // console.log(date);
  return (
    <>
      <div style={themeStyle}>
        <Header />
        <Hero />
        {/* <Search />
        <ChangeTheme />
        <hr />
        <Navbar />

        <hr />

        <Profile />
        <hr />

        <Home />
        <h1>Reverse {theme?.theme}</h1>
        <ReverseCount time={1} />
        <Context />

        <br />
        <DisplayProductsData id={1} />
        <DisplayUsersData id={1} /> */}

        <hr />
      </div>
    </>
  );
};

export default App;
