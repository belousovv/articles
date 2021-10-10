import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
