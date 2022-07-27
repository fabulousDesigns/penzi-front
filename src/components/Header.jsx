import React, { useState } from "react";
import { Link } from "react-router-dom";
// import RegisterUsers from "./RegisterUsers";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="h2">
          💖PENZI🖤
        </Link>
        <p className="lead">FIND YOUR SOUL MATE</p>
      </div>
      <div className="call__to__action__btn">
        <Link to="/login" className="btn btn__login">
          Login
        </Link>
        <Link to="/register" className="btn btn__register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Header;
