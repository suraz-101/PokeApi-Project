import { useContext, useState } from "react"; // importing useContext to use the context
import { createContext } from "react"; // importing createContext function to create the context

const UserContext = createContext({}); // creating the contextvariable with default value null

export const Context = () => {
  const [name, setName] = useState("Suraj ");
  return (
    <>
      <Context1 />
      <UserContext.Provider value={{ name, setName }}>
        {/*context provider */}
        {/* <Context1 /> */}
        <Context2 />
      </UserContext.Provider>
    </>
  );
};

const Context1 = () => {
  const username = useContext(UserContext);
  return (
    <>
      {username.name}
      {/* <Context2 /> */}
    </>
  );
};

const Context2 = () => {
  const username = useContext(UserContext); // consumer

  return (
    <>
      Hellow :{username.name}
      <button
        onClick={() => {
          username.setName("Suraj Pandey");
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          username.setName("Suraj");
        }}
      >
        Reset
      </button>
    </>
  );
};
