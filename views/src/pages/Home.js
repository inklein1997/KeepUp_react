import React, { useState } from "react";
import { Link } from "react-router-dom";

import homeImg from "../assets/images/homepage-img.png";
import "./Home.css";

const Home = () => {
  const [email, setEmail] = useState("");

  const emailhandler = (e) => {
      setEmail(e.target.value)
  }
  return (
    <div className="background--gradient flex__row--reverse">
      <img src={homeImg} className="img__home" alt="drawing of productivity" />
      <div className="flex__column">
        <h2 className="h2__home">
          KeepUp makes task delegation and project management easy.
        </h2>
        <h3 className="h3__home">
          Eliminate any miscommunications, delegate tasks with ease, and chat
          with fellow project members--accomplish it all with KeepUP.
        </h3>
        <div className="flex__column">
          <input
            type="email"
            placeholder="enter email"
            value={email}
            onChange={emailhandler}
          />
          <Link to="/signup" className="btn__green">
            Sign up -- it's free!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
