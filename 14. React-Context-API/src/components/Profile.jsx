import { useContext } from "react";
import UserContext from "../context/User/UserContex";

function Profile() {
  const { user } = useContext(UserContext);
  const { firstName, lastName, dateOfBirth, email, address } = user;
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">User Profile</h5>
          <p className="card-text">First Name : {firstName}</p>
          <p className="card-text">Last Name : {lastName}</p>
          <p className="card-text">Date Of Birth : {dateOfBirth}</p>
          <p className="card-text">Email : {email}</p>
          <p className="card-text">Address : {address}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
