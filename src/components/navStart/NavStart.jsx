import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TbWorld } from "react-icons/tb";
import Modal from "react-modal";
import Button from "../Button/Button";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import "./NavStart.scss";

const NavStart = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      toggleModal();
    });
  };

  return (
    <header className="header">
      <div className="brand">{t("learningTime")}</div>

      <div
        className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        &#9776;
      </div>

      <nav className={`header-nav ${isMenuOpen ? "open" : ""}`}>
        <Link to="/Login">
          <Button>{t("login")}</Button>
        </Link>
        <Link to="/Register">
          <Button>{t("register")}</Button>
        </Link>
        <TbWorld className="language" onClick={toggleModal} />
      </nav>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel={t("language")}
        className="Modal"
      >
        <div className="contModal">
          <IoClose className="Close" onClick={toggleModal} />

          <button className="ButtonModal" onClick={() => changeLanguage("en")}>
            {t("english")}
          </button>
          <button className="ButtonModal" onClick={() => changeLanguage("es")}>
            {t("spanish")}
          </button>
          <button className="ButtonModal" onClick={() => changeLanguage("fr")}>
            {t("french")}
          </button>
          <button className="ButtonModal" onClick={() => changeLanguage("it")}>
            {t("italian")}
          </button>
        </div>
      </Modal>
    </header>
  );
};

export default NavStart;
