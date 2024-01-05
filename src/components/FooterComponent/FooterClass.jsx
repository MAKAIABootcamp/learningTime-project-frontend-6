import React from "react";
import "./FooterClass.scss";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const FooterClass = () => {
  return (
    <footer className="footerClass">
      <div className="links">
        <div className="column">
          <div className="texto">Ayuda</div>
          <div className="link">
            <span>Tarjeta de débito</span>
          </div>
          <div className="link">
            <span>Tarjeta de Credito</span>
          </div>
          <div className="link">
            <span>Créditos hipotecarios</span>
          </div>
        </div>

        {/* ... columnas 2 */}
        <div className="column">
          <div className="texto">Empresa</div>
          <div className="link">
            <span>Sobre Nosotros</span>
          </div>
          <div className="link">
            <span>Nuestros cursos</span>
          </div>
        </div>

        {/* ... columnas 3 */}
        <div className="column">
          <div className="texto">Contactos</div>
          <div className="link">
            <span>Dirección cll 1A # BC</span>
          </div>
          <div className="link">
            <FaFacebook className="iconClass" />
            <FaWhatsapp className="iconClass" />
            <FaInstagram className="iconClass" />
            <FaLinkedin className="iconClass" />
          </div>
        </div>
      </div>
      <div className="texto-general">2023 Grupo Learning Time</div>
    </footer>
  );
};

export default FooterClass;
