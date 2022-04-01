import React, {useContext, Fragment} from 'react';
import {Link} from 'react-router-dom'

import logo from '../assets/images/arrow-logo.png'
import {UserContext} from '../store/user-context'

import './Banner.css'

const Banner = () => {
  const [user, setUser] = useContext(UserContext);
  
  const logoutHandler = () => {
    localStorage.removeItem("credentials");
    setUser({ id: null, first_name: null, last_name: null, email: null });
    window.location.assign("/")
  }

    return (
      <header className="flex_row header">
        <div className="flex_row align-center">
          <img className="img__logo" src={logo} alt="logo" />
          <h1 className="h1__title">KeepUp</h1>
        </div>
        <div className="flex_row align-center">
          {(user.id == null) ? (
            <Fragment>
              <Link to="/login" className="btn__text--blue">
                Log in
              </Link>
              <Link to="/signup" className="btn__blue">
                Sign up
              </Link>
            </Fragment>
          ) : (
            <button className="btn__logout" onClick={logoutHandler}>Logout</button>
          )}
        </div>
      </header>
    );
}

export default Banner;
