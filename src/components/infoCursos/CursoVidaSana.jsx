// import React from 'react'
import "./Inf.scss";
import c4 from "./images/curso4.png";
import c5 from "./images/curso5.png";
import c6 from "./images/curso6.png";

const CursoVidaSana = () => {
  return (
    <>
        <section className="my-component">
        <div className="subtitle">
          <span className="contenido">Vida Sana</span>
        </div>
      <div className="course-info">
        <h2>Functional Fitness
          <br />
          <br />
        </h2>
        <img className="image" src={c4} alt="Imagen cuarto curso" />
        <p>
          Este curso se centra en el fitness funcional, que implica ejercicios diseñados para mejorar la capacidad del cuerpo para realizar actividades diarias de manera más efectiva. Puede incluir
          entrenamiento con peso corporal, ejercicios con equipamiento funcional y la incorporación de movimientos que imitan acciones cotidianas.
        </p>
        <div className="btn-ingresar4">
          <button>Ingresar</button>
        </div>
      </div>
      <div className="course-info">
        <h2>Introducción a la Mente Positiva</h2>
        <img className="image" src={c5} alt="Imagen quinto curso" />
        <p>
          La psicología positiva se centra en el estudio de la experiencia humana, como la felicidad, la gratitud y el florecimiento personal. Este curso explora las teorías y prácticas de la psicología positiva para promover el bienestar mental.
        </p>
        <div className="btn-ingresar5">
          <button>Ingresar</button>
        </div>
      </div>
      <div className="course-info">
        <h2>Calistenia
        <br />
        <br />
        </h2>
        <img className="image" src={c6} alt="Imagen sexto curso" />
        <p>
          Este curso se enfoca en el entrenamiento de peso corporal, también
          conocido como calistenia. Aprenderás técnicas para desarrollar fuerza,
          resistencia y flexibilidad utilizando principalmente tu propio peso
          como resistencia. El curso puede incluir ejercicios como flexiones,
          dominadas, fondos y progresiones avanzadas.
        </p>
        <div className="btn-ingresar6">
          <button>Ingresar</button>
        </div>
      </div>
      </section>
    </>
  )
}

export default CursoVidaSana