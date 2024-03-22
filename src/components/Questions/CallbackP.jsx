import { useCallback } from "react";
import { useState } from "react";
import { CallbackC } from "./CallbackC";

export const CallbackP = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addData = useCallback(() => {
    setData((d) => [...d, Date.now().toString()]);
  }, []);

  return (
    <>
      <CallbackC data={data} addData={addData} />
      <button onClick={increment}>Toggle</button> {count}
    </>
  );
};
