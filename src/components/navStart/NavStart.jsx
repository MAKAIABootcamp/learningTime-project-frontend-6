import React, { useState } from "react";
import "./NavStart.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAsync } from "../../store/users/userActions";
import { TbWorld } from "react-icons/tb";
import Modal from "react-modal";
import Button from "../Button/Button";
import { IoClose } from "react-icons/io5";

const NavStart = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logoutAsync());
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
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
        <Link to="/Login">
          <Button>Login</Button>
        </Link>
        <Link to="/Register">
          <Button>Register</Button>
        </Link>
        <TbWorld className="language" onClick={toggleModal} />
      </nav>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Language Modal"
        className="Modal"
      >
        <div className="contModal">
          <IoClose className="Close" onClick={toggleModal} />

          <button className="ButtonModal">English</button>
          <button className="ButtonModal">Deutsch</button>
          <button className="ButtonModal">Español</button>
          <button className="ButtonModal">Francia</button>
          <button className="ButtonModal">Italiano</button>
        </div>
      </Modal>
    </header>
  );
};

export default NavStart;
