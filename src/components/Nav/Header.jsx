import React, { useState } from "react";
import "./Header.scss"; // Importa tu archivo SCSS
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="brand">Learning Time</div>

      <div
        className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
      </div>

      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <Link to="/Home" className="nav-link">
          Inicio
        </Link>

        <Link to="/About" className="nav-link">
          Quiénes Somos
        </Link>
        <Link to="/Cursos" className="nav-link">
          Cursos
        </Link>
        <Link to="/" className="nav-link">
          Contacto
        </Link>
      </nav>
    </header>
  );
};

export default Header;
