// import React from 'react'
import "./Inf.scss";
import c1 from "./images/curso1.png";
import c2 from "./images/curso2.png";
import c3 from "./images/curso3.png";


const CursoSaludMental = () => {
  return (
    <>
      <section className="my-component">
          <div className="subtitle">
            <span className="contenido">Salud mental</span>
          </div>
        <div className="course-info">
          <h2>Mindfulness y Reducción de Estres</h2>
          <img className="image" src={c1} alt="Imagen primer curso" />
          <p>
            La atención plena, conocida como mindfulness en inglés, es una
            práctica que se centra en la conciencia plena y la atención al
            momento presente. El concepto tiene sus raíces en antiguas
            tradiciones contemplativas, como el budismo, pero en la actualidad
            se ha popularizado y adaptado en contextos secularizados y enfoques
            terapéuticos.
          </p>
          <div className="btn-ingresar1">
            <button>Ingresar</button>
          </div>
        </div>
        <div className="course-info">
          <h2>Introducción a la Mente Positiva</h2>
          <img className="image" src={c2} alt="Imagen segundo curso" />
          <p>
            La psicología positiva se centra en el estudio de aspectos positivos
            de la experiencia humana, como la felicidad, la gratitud y el
            florecimiento personal. Este curso explora las teorías y prácticas
            de la psicología positiva para promover el bienestar mental.
          <div className="btn-ingresar2">
            <button>Ingresar</button>
          </div>
          </p>
        </div>
        <div className="course-info">
          <h2>Gestión del Estrés y Bienestar Emocional</h2>
          <img className="image" src={c3} alt="Imagen tercer curso" />
          <p>
            Este curso se enfoca en estrategias prácticas para manejar el estrés
            y mejorar el bienestar emocional. Examina técnicas de afrontamiento,
            manejo del tiempo y prácticas que fomentan la resiliencia en
            situaciones estresantes.
          </p>
          <div className="btn-ingresar3">
            <button>Ingresar</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CursoSaludMental;
