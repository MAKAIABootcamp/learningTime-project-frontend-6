import React from "react";
import "./Footer.scss";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="text">
          <div className="texto1">Convierte tus sueños en realidad</div>
          <div className="texto2">Convierte tus sueños en realidad</div>
        </div>

        <button className="button">Inscríbite</button>

        <div className="contactos">
          <div className="texto">learningTime</div>
          <div className="redes">
            <FaWhatsapp className="redes-icon" />
            <FaFacebookSquare className="redes-icon" />

            <div className="texto">Youtube</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
