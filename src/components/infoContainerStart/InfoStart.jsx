import React from "react";
import "./InfoStart.scss";
import { Link } from "react-router-dom";
function InfoStart() {
  return (
    <>
      <div className="contStart">
        <div className="contText">
          <div className="text">
            <p>
              Aprende desde <p className="p-curso">cualquier lugar</p>
            </p>
          </div>
          <div className="contDescription">
            <p className="description">
              Desde el sofá, el jardín o la terraza de tu casa, o de camino al
              trabajo. Aprende como quieras con nuestra aplicación.
            </p>
          </div>

          <Link to="/Login">
            <button className="buttonText">Ingresar</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default InfoStart;
