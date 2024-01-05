import React from "react";
import "./Hero.scss";
import { FaCirclePlay } from "react-icons/fa6";
import miImagen from "../../../public/Images/todos.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="context">
          <div className="text">
            <p>Bienvenidos a nuestra plataforma</p>
            <h3 className="text-subtitulo">
              Descubre los mejores cursos para ti
            </h3>
          </div>
          <div className="buttons">
            <button className="button">
              <span className="button-text">
                <Link to="/Cursos" className="link-Hero">
                  Comenzar
                </Link>
              </span>
            </button>
            <div className="link">
              <p className="text-parrafo">
                <Link to="/Class" className="link-parrafo">
                  Ver Curso
                </Link>
              </p>
              <Link to="/Class">
                <FaCirclePlay className="icon" />
              </Link>
            </div>
          </div>
          <div>
            <img src={miImagen} alt="Descripción de la imagen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
