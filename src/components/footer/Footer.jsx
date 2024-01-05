import React from "react";
import "./Footer.scss";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="containerFooter">
        <div className="text">
          <div className="texto1">Convierte tus sueños en realidad</div>
          <div className="texto2">
            No pierdas tiempo y empieza <br /> tu proyecto hoy mismo.
          </div>
        </div>

        <button className="button">
          <Link to="/login" className="link">
            Inscríbite
          </Link>
        </button>

        <div className="cont">
          <div className="texto">learningTime</div>
          <div className="redes">
            <Link to="/login">
              <FaWhatsapp className="redes-icon" />
            </Link>
            <Link to="/login">
              <FaFacebookSquare className="redes-icon" />
            </Link>
            <Link to="/login">
              <FaYoutube className="redes-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
