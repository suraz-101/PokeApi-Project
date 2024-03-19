import { useContext } from "react";
import { userContext } from "../../context/UserContext";

export const Navbar = () => {
  const { userDetails } = useContext(userContext);

  return (
    <>
      <div>This is navbar Hello {userDetails?.firstName}</div>
    </>
  );
};
