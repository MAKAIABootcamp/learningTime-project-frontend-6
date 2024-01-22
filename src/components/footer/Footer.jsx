import React from "react";
import "./Footer.scss";
import { FaWhatsapp, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(); // Agrega esta línea

  return (
    <div className="footer">
      <div className="containerFooter">
        <div className="text">
          <div className="texto1">{t("convierteTusSuenos")}</div>
          <div className="texto2">
            {t("noPierdasTiempo")} <br /> {t("empiezaTuProyecto")}
          </div>
        </div>

        <button className="button">
          <Link className="link" to="/Login">
            <button className="button">{t("inscribete")}</button>
          </Link>
        </button>

        <div className="cont">
          <div className="texto">{t("learningTime")}</div>
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
