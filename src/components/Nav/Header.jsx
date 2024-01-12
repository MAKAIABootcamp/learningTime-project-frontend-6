import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../../store/users/userActions";
import Button from "../Button/Button";

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
          <Button>Inicio</Button>
        </Link>

        <Link to="/Cursos">
          <Button>Cursos</Button>
        </Link>

        <Link to="/About">
          <Button>Acerca de</Button>
        </Link>
        <Link to="/Contact">
          <Button>Contacto</Button>
        </Link>

        {user?.email === "jesusa@gmail.com" && (
          <Link to="/Admin" className="nav-link">
            <Button>Administrador</Button>
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
