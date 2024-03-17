import { Context } from "./components/Context";
import { Home } from "./components/Home";
import { ReverseCount } from "./components/Questions/Question";

const App = () => {
  // const date = new Date("2024-10-11 10:00:00").toISOString();
  // console.log(date);
  return (
    <>
      <div>
        <Home />
        <h1>Reverse Counter</h1>
        <ReverseCount time={6} />
        <Context />
      </div>
    </>
  );
};

export default App;
