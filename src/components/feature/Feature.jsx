import React from "react";
import "./Feature.scss";
import imagen from "../../../public/Images/Feature-image1.png";

const Feature = () => {
  return (
    <div className="features">
      <h1>Tenemos una amplia trayectoria en este campo</h1>

      <div className="feature">
        <div className="text-container">
          <div className="text-active">
            <p className="text-parrafo-active">
              Docentes profesionales en el área
            </p>
            <p className="text-subparrafo-active">
              Docentes comprometidos con la excelencia y la innovación educativa
              para un aprendizaje integral y significativo.
            </p>
          </div>
          <div className="text-inactive">
            <p className="text-parrafo-inactive">
              ¡Tu tiempo nuestra prioridad!
            </p>
            <p className="text-subparrafo-inactive">
              Implementamos mejoras para ajustarnos a tu ritmo y maximizar la
              eficacia.
            </p>
          </div>
          <div className="text-inactive">
            <p className="text-parrafo-inactive">Aprende a tu ritmo</p>
            <p className="text-subparrafo-inactive">
              Nuestro enfoque personalizado se adapta a tus horarios y
              objetivos, facilitando un aprendizaje flexible y efectivo.
            </p>
          </div>
        </div>

        <div className="container-imgen">
          <img src={imagen} alt="Descripción 1" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
