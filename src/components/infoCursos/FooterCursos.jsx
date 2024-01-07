//import React from 'react'
import logoEmpresa from "./images/Frame 3.png";
import "./Inf.scss";
import logoWhatsApp from "./images/🦆 icon _logo whatsapp_.svg";
import logoInstagram from "./images/🦆 icon _logo instagram_.svg";
import logoFacebook from "./images/🦆 icon _logo facebook_.svg";
import logoLinkedin from "./images/🦆 icon _logo linkedin_.svg";

const FooterCursos = () => {
  return (
    <>
    <footer>
        <div className="logo"> 
            <img className="logoEmpresa" src={logoEmpresa} alt="logoEmpresa" />
        </div>

        <div className="cursosFooter">
            <p> <strong> -Finanzas </strong> </p>
            <p> <strong>-Salud Mental</strong></p>
            <p> <strong> -Vida Sana </strong></p>
            <p> <strong> -Terminos y Condiciones </strong></p>
        </div>

        <div className="contactos">
            <p className="subtContacto"> <strong> Contacto </strong></p>
            <p> <strong> -learningtime23@learn.com </strong></p>
        </div>
            <div className="redesSociales">
                <img className="WhatsApp" src={logoWhatsApp} alt="logoEmpresa" />
                <img className="Facebook" src={logoFacebook} alt="logoEmpresa" />
                <img className="Instagram" src={logoInstagram} alt="logoEmpresa" />
                <img className="linkedin" src={logoLinkedin} alt="logoEmpresa" />
            </div>

        <p className="añoEmpresa">© 2023 Grupo Learning Time</p>
    </footer>
    </>
  )
}

export default FooterCursos