import { useContext } from "react";
import { userContext } from "../../context/UserContext";

export const Profile = () => {
  const { userDetails } = useContext(userContext);
  return (
    <>
      This is Profile
      <div> First Name: {userDetails?.firstName}</div>
      <br />
      <div>Last Name: {userDetails?.lastName}</div>
    </>
  );
};
