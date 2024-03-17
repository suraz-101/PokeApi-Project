import { useState, useEffect } from "react";

export const ReverseCount = ({ time }) => {
  const [reverseCounter, setReverseCounter] = useState(time);

  useEffect(() => {
    if (reverseCounter <= 0) {
      return;
    }
    const timer = setTimeout(() => {
      setReverseCounter(reverseCounter - 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <p>The reverse Counter is : {reverseCounter}</p>
    </>
  );
};
