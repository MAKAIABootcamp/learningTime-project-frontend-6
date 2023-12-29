import React from "react";
import "./Hero.scss";
import { FaCirclePlay } from "react-icons/fa6";
import miImagen from "../../../public/Images/todos.png";

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
              <span className="button-text">Comenzar</span>
            </button>
            <div className="link">
              <p className="text-parrafo">Ver Curso</p>
              <FaCirclePlay className="icon" />
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
