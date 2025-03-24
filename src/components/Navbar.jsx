import React from "react";
import { Link } from 'react-router-dom';
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          <Logo />
          <span className="brand-name">OM GAMES</span>
        </div>
        <div className="navbar-links">
          <Link to="/">Início</Link>
          <Link to="/privacidade">Política de Privacidade</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;