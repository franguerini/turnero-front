import React, { Component } from "react";
import { Link } from "react-router-dom";
import ROUTES from "./../../../../constants/routes";
import icon from "./../../../../assets/stethoscope.svg";
import "./styles.scss";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="navbar-link" to={ROUTES.HOME()}>
          <img src={icon} className="logo-asset" />
          <span className="logo-text">TURNERO</span>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
