import React, { useState } from "react";
import "./Header.scss"; // Importa tu archivo SCSS

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
        <a href="/" className="nav-link">
          Inicio
        </a>
        <a href="/about" className="nav-link">
          Quiénes Somos
        </a>
        <a href="/courses" className="nav-link">
          Cursos
        </a>
        <a href="/contact" className="nav-link">
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
