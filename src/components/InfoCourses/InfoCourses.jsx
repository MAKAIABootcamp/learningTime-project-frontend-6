import React from "react";
import "./InfoCourses.scss";
import ClassOne from "../../../public/Images/ClassOne.png";

function InfoCourses() {
  return (
    <>
      <div className="Container">
        <div className="ContNameClass">
          <div className="Info">
            <div className="text">
              <Inf />
              <p>
                Introducción a la <p className="p-curso">mente positiva</p>
              </p>
            </div>
          </div>

          <div className="ImageContainer">
            <img
              src={ClassOne}
              alt="Descripción de la imagen"
              className="image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoCourses;
