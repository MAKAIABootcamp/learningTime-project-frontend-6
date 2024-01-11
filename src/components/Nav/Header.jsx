import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../../store/users/userActions";
import { Button } from "react-bootstrap";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  console.log("User:{", user);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logoutAsync());
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
        <Link to="/Home">
          <button className="linkButton"> Inicio</button>
        </Link>

        <Link to="/Cursos">
          <button className="linkButton">Cursos</button>
        </Link>

        <Link to="/About">
          <button className="linkButton">Acerca de</button>
        </Link>
        <Link to="/Contact">
          <button className="linkButton">Contacto</button>
        </Link>

        {user?.email === "jesusa@gmail.com" && (
          <Link to="/Crud" className="nav-link">
            <button className="linkButton">Administrador </button>
          </Link>
        )}

        <button className="CerrarSesión" type="button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </nav>
    </header>
  );
};

export default Header;
