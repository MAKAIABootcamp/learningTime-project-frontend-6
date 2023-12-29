import React from "react";
import "./Header.scss"; // Importa tu archivo SCSS

const Header = () => {
  return (
    <header className="header">
      <div className="brand">Tu Marca</div>

      <nav className="header-nav">
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
        <div className="line"></div>
        <div className="profile"></div>
      </nav>
    </header>
  );
};

export default Header;
