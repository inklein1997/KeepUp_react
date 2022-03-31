import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const loginHandler = () => {};
  return (
    <div className="background--gradient">
      <div className="flex__column div__login">
        <div>
          <h3 className="h3__formTitle">Login to KeepUp</h3>
          <form onSubmit={loginHandler} className="flex__column form__login">
            <input placeholder="enter email" type="email" />
            <input placeholder="enter password" type="password" />
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
