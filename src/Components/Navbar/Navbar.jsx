import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg py-3 mb-2 position-fixed w-100 3">
          <div className="container">
            <NavLink className="navbar-brand fs-5" to="#About">
              START REACT
            </NavLink>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
            >
              MENU <i className="fas fa-bars "></i>
            </button>
            <div className="collapse navbar-collapse  " id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto mt-3">
                <li className="nav-item">
                  <NavLink className="nav-link py-3 active" to="/portfolio">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link py-3" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link py-3" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
