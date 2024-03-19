import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});

  const { data } = useFetch("https://dummyjson.com/users/1");

  useEffect(() => {
    setUserDetails(data);
  }, [data]);

  return (
    <userContext.Provider value={{ userDetails }}>
      {children}
    </userContext.Provider>
  );
};
