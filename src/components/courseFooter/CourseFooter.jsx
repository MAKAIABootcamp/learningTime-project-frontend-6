import logoEmpresa from "../coursePage/images/Frame 3.png";
import "../courseFooter/CourseFooter.scss"
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const CourseFooter = () => {
    return (
        <>
            <footer className="fooCursos">
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
                    <FaWhatsapp className="IconRedes" />
                    <FaFacebook className="IconRedes" />
                    <FaInstagram className="IconRedes" />
                    <FaLinkedin className="IconRedes" />
                </div>

                <p className="añoEmpresa">© 2023 Grupo Learning Time</p>
            </footer>
        </>
    )
}

export default CourseFooter