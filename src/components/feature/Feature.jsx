import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveText } from "../../store/feature/featureActions";
import { selectActiveText } from "../../store/feature/featureSlice";
import { useTranslation } from "react-i18next";
import "./Feature.scss";

import imagen1 from "../../../public/Images/Feature-image1.png";
import imagen2 from "../../../public/Images/Feature-image2.png";
import imagen3 from "../../../public/Images/Feature-image3.png";

const Feature = () => {
  const dispatch = useDispatch();
  const activeText = useSelector(selectActiveText);
  const { t } = useTranslation(); // Agrega esta línea

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
      <h1>{t("tenemosAmpliaTrayectoria")}</h1> {/* Agrega la traducción aquí */}
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
                {t(`textParrafo.${index}`)} {/* Agrega la traducción aquí */}
              </p>
              <p
                className={`text-subparrafo-${
                  index === activeText ? "active" : "inactive"
                }`}
              >
                {t(`textSubparrafo.${index}`)} {/* Agrega la traducción aquí */}
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
