import { Context } from "./components/Context";
import {
  DisplayProductsData,
  DisplayUsersData,
} from "./components/DisplayData";
import { Home } from "./components/Home";
import { ReverseCount } from "./components/Questions/Question";
import { ChangeTheme } from "./components/Theme";

const App = () => {
  // const date = new Date("2024-10-11 10:00:00").toISOString();
  // console.log(date);
  return (
    <>
      <div>
        <Home />
        <h1>Reverse Counter</h1>
        <ReverseCount time={1} />
        <Context />
        <ChangeTheme />
        <hr />
        <DisplayProductsData id={1} />
        <DisplayUsersData id={2} />
      </div>
    </>
  );
};

export default App;
