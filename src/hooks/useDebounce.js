import { useEffect } from "react";
export const useDebounce = ({ wait, value, setFn }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setFn(value);
    }, Number(wait));
    return () => {
      clearTimeout(timer);
    };
  }, [wait, value, setFn]);
};
