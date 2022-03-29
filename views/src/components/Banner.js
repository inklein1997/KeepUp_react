import React from 'react';
import {Link} from 'react-router-dom'

import logo from '../assets/images/arrow-logo.png'

import './Banner.css'

const Banner = () => {
    return (
      <header className="flex_row header">
        <div className="flex_row align-center">
          <img className="img__logo" src={logo} alt="logo" />
          <h1 className="h1__title">KeepUp</h1>
        </div>
        <div className='flex_row'>
          <Link to="/login">Log in</Link>
          <Link to="/login">Sign up</Link>
        </div>
      </header>
    );
}

export default Banner;
