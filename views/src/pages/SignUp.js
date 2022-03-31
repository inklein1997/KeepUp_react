import React, { useState } from "react";
import { Link } from "react-router-dom";

import UseHttp from "../utils/API";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordVerify: "",
  });

  const showData = (data) => {
    console.log(data);
  };

  const {
    isLoading,
    error,
    sendRequest: createUser,
  } = UseHttp(
    {
      url: "/api/users/",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: credentials,
    },
    showData
  );

  const signupHandler = (e) => {
    e.preventDefault();
    console.log(credentials);
    createUser();
  };

  const formHandler = (e) => {
    switch (e.target.name) {
      case "firstName":
        setCredentials({ ...credentials, firstName: e.target.value });
        break;
      case "lastName":
        setCredentials({ ...credentials, lastName: e.target.value });
        break;
      case "email":
        setCredentials({ ...credentials, email: e.target.value });
        break;
      case "password":
        setCredentials({ ...credentials, password: e.target.value });
        break;
      case "passwordVerify":
        setCredentials({ ...credentials, passwordVerify: e.target.value });
        break;
    }
  };

  return (
    <div className="background--gradient">
      <div className="flex__column div__login">
        <div>
          <h3 className="h3__formTitle">Sign Up for KeepUp</h3>
          <form onSubmit={signupHandler} className="flex__column form__login">
            <input
              placeholder="Enter first name"
              type="text"
              value={credentials.firstName}
              name="firstName"
              onChange={formHandler}
            />
            <input
              placeholder="Enter last name"
              type="text"
              value={credentials.lastName}
              name="lastName"
              onChange={formHandler}
            />
            <input
              placeholder="Enter email"
              type="email"
              value={credentials.email}
              name="email"
              onChange={formHandler}
            />
            <input
              placeholder="Enter password"
              type="password"
              value={credentials.password}
              name="password"
              onChange={formHandler}
            />
            <input
              placeholder="Re-enter password"
              type="password"
              value={credentials.passwordVerify}
              name="passwordVerify"
              onChange={formHandler}
            />
            <input value="Login" type="submit" className="btn__green--login" />
          </form>
        </div>
        <div>
          <hr />
          <h4>
            Already have an account? <Link to="/signup">Sign up here</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Signup;
