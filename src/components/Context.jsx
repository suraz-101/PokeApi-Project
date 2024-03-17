import { useState } from "react";

export const Context = () => {
  const [name, setName] = useState("Suraj Pandey");
  return (
    <>
      <Context1 name={name} />
    </>
  );
};

const Context1 = ({ name }) => {
  return (
    <>
      <Context2 name={name} />
    </>
  );
};

const Context2 = ({ name }) => {
  return <>Hellow : {name}</>;
};
