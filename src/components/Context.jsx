import { useContext, useState } from "react"; // importing useContext to use the context
import { createContext } from "react"; // importing createContext function to create the context

const UserContext = createContext(null); // creating the contextvariable with default value null

export const Context = () => {
  const [name, setName] = useState("Suraj ");
  return (
    <>
      <UserContext.Provider value={{ name, setName }}>
        {/*context provider */}
        {/* <Context1 /> */}
        <Context1 />
      </UserContext.Provider>
      {/* <Context1 /> */}
    </>
  );
};

const Context1 = () => {
  return (
    <>
      <Context2 />
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
