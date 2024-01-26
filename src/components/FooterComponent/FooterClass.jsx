import React from "react";
import "./FooterClass.scss";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterClass = () => {
  return (
    <footer className="footerClass">
      <div className="links">
        <div className="column">
          <div className="texto">Quiénes Somos?</div>
          <div className="link">
            <Link to="/About" className="enlace">
              <span>Sobre Nosotros</span>
            </Link>
          </div>
          <img
            src="https://res.cloudinary.com/dwevhpoby/image/upload/v1706200639/imagenes/nmvp90pwvvnciqrfomm4.png"
            alt=""
            width="150px"
            height="150px"
          />
        </div>

        <div className="column">
          <div className="texto-NuestrasRedes">Nuestras redes</div>
          <div className="link">
            <FaFacebook className="iconClass" />
            <FaWhatsapp className="iconClass" />
            <FaInstagram className="iconClass" />
            <FaLinkedin className="iconClass" />
          </div>
        </div>

        <div className="column">
          <div className="texto-Contactos">Contactos</div>
          <div className="link">
            <span>Dirección calle 1A # BC</span>
          </div>
          <div className="link">
            <span>+57 315 2804912</span>
          </div>
          <div className="link">
            <span>info@LearningTime.org</span>
          </div>
        </div>
      </div>
      <div className="texto-general">2023 Grupo Learning Time</div>
    </footer>
  );
};

export default FooterClass;
