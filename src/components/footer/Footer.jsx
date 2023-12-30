import React from "react";
import "./Footer.scss";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";

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

        <button className="button">Inscríbite</button>

        <div className="cont">
          <div className="texto">learningTime</div>
          <div className="redes">
            <FaWhatsapp className="redes-icon" />
            <FaFacebookSquare className="redes-icon" />
            <FaYoutube className="redes-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
