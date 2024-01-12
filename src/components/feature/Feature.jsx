import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveText } from "../../store/feature/featureActions";
import { selectActiveText } from "../../store/feature/featureSlice";
import "./Feature.scss";

import imagen1 from "../../../public/Images/Feature-image1.png";
import imagen2 from "../../../public/Images/Feature-image2.png";
import imagen3 from "../../../public/Images/Feature-image3.png";

const Feature = () => {
  const dispatch = useDispatch();
  const activeText = useSelector(selectActiveText);

  const handleTextClick = (index) => {
    dispatch(setActiveText(index));
  };

  const getImageForActiveText = () => {
    switch (activeText) {
      case 0:
        return imagen1;
      case 1:
        return imagen2;
      case 2:
        return imagen3;
      default:
        return imagen1;
    }
  };

  return (
    <div className="features">
      <h1>Tenemos una amplia trayectoria en este campo</h1>

      <div className="feature">
        <div className="text-container">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={index === activeText ? "text-active" : "text-inactive"}
              onClick={() => handleTextClick(index)}
            >
              <p
                className={`text-parrafo-${
                  index === activeText ? "active" : "inactive"
                }`}
              >
                {index === 0
                  ? "Docentes profesionales en el área"
                  : index === 1
                  ? "¡Tu tiempo nuestra prioridad!"
                  : "Aprende a tu ritmo"}
              </p>
              <p
                className={`text-subparrafo-${
                  index === activeText ? "active" : "inactive"
                }`}
              >
                {index === 0
                  ? "Docentes comprometidos con la excelencia y la innovación educativa para un aprendizaje integral y significativo."
                  : index === 1
                  ? "Implementamos mejoras para ajustarnos a tu ritmo y maximizar la eficacia."
                  : "Nuestro enfoque personalizado se adapta a tus horarios y objetivos, facilitando un aprendizaje flexible y efectivo."}
              </p>
            </div>
          ))}
        </div>

        <div className="container-imgen">
          <img
            src={getImageForActiveText()}
            alt={`Descripción ${activeText + 1}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
