import React from "react";
import "./DetailsClass.scss";
import { MdComputer, MdOutlineAccessTime } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";

const DetailsClass = () => {
  return (
    <div className="iconos-container">
      <div className="container">
        <div className="frame">
          <MdComputer className="icon" />
          <span className="texto">Modalidad:</span>
          <p className="parrafo">Curso Virtual</p>
        </div>
        <div className="frame">
          <FaRegUser className="icon" />
          <span className="texto">Mentores:</span>
          <p className="parrafo">Alejandro Serna</p>
        </div>
        <div className="frame">
          <AiOutlineLineChart className="icon" />
          <span className="texto">Nivel:</span>
          <p className="parrafo">Básico</p>
        </div>
        <div className="frame">
          <MdOutlineAccessTime className="icon" />
          <span className="texto">Duración:</span>
          <p className="parrafo">2 horas</p>
        </div>
        <div className="frame">
          <GrCertificate className="icon" />
          <span className="texto">Certificado:</span>
          <p className="parrafo">Sí</p>
        </div>
      </div>
    </div>
  );
};

export default DetailsClass;
