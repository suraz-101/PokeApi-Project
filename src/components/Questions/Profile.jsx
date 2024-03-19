import { useContext } from "react";
import { userContext } from "../../context/UserContext";

export const Profile = () => {
  const { userDetails } = useContext(userContext);
  return (
    <>
      This is Profile
      <div>
        {" "}
        First Name: <input type="text" value={userDetails?.firstName} />
        {/* {userDetails?.firstName} */}
      </div>
      <br />
      <div>
        Last Name: <input type="text" value={userDetails?.lastName} />
      </div>
      <div>
        <button>Update</button>
      </div>
    </>
  );
};
