import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className="nav__link"
            to="/home"
            activeClassName="nav__link--active"
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            to="/users"
            activeClassName="nav__link--active"
          >
            Users
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            to="/photos"
            activeClassName="nav__link--active"
          >
            Photos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
