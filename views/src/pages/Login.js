import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const loginHandler = async (e) => {
    e.preventDefault();
    let response = await fetch("api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginCredentials.email,
        password: loginCredentials.password,
      }),
    });
    if (response.status == 200) {
      let response1 = await fetch(`api/users/${loginCredentials.email}`, {
        method: "GET"
      });
      let data = await response1.json()

      localStorage.setItem("credentials", JSON.stringify(data))
      window.location.assign("/dashboard")
    } else {
      console.error(response);
      alert("failed to login in");
    }
  };

  const onChangeHandler = (e) => {
    let name = e.target.attributes.name.value;
    if (name === "email") {
      setLoginCredentials({ ...loginCredentials, email: e.target.value });
    } else {
      setLoginCredentials({ ...loginCredentials, password: e.target.value });
    }
  };

  return (
    <div className="background--gradient">
      <div className="flex__column div__login">
        <div>
          <h3 className="h3__formTitle">Login to KeepUp</h3>
          <form onSubmit={loginHandler} className="flex__column form__login">
            <input
              placeholder="enter email"
              type="email"
              name="email"
              value={loginCredentials.email}
              onChange={onChangeHandler}
            />
            <input
              placeholder="enter password"
              type="password"
              name="password"
              value={loginCredentials.password}
              onChange={onChangeHandler}
            />
            <input value="Login" type="submit" className="btn__green--login" />
          </form>
        </div>
        <div>
          <hr />
          <h4>
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
