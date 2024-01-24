import { useContext, useCallback, useState } from "react";
import UserContext from "../context/User/UserContex";

function Register() {
  const { setUser } = useContext(UserContext);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    address: "",
  });

  const formChangeHandler = useCallback((detail) => {
    setUserDetails({...userDetails, ...detail});
  });

  const formSubmitHandler = useCallback(() => {
    setUser(userDetails);
  });

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        formSubmitHandler()
      }}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            onChange={(e) => formChangeHandler({ firstName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            onChange={(e) => formChangeHandler({ lastName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth" className="form-label">
            Date Of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            className="form-control"
            onChange={(e) => formChangeHandler({ dateOfBirth: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            onChange={(e) => formChangeHandler({ email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            type="text"
            name="address"
            className="form-control"
            onChange={(e) => formChangeHandler({ address: e.target.value })}
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Register;
