import React, { useState } from "react";
import "../coursePage/Cursos.scss";
import { Link } from "react-router-dom";
import SM3 from "./images/SM3.png";
import SM1 from "./images/SM1.png";
import SM2 from "./images/SM2.png";
import VD1 from "./images/VD1.png";
import VD2 from "./images/VD2.png";
import VD3 from "./images/VD3.png";
import F1 from "./images/F1.png";
import F2 from "./images/F2.png";
import c9 from "./images/curso9.png";

const dataCursos = [
  {
    categoria: "Finanzas",
    cursos: [
      {
        titulo: "Finanzas Personales",
        imagen: F1,
        descripcion:
          "Este curso aborda los principios fundamentales de las finanzas personales, incluyendo la creación de presupuestos, el ahorro, la inversión y la planificación para el retiro. Ofrece herramientas prácticas para gestionar de manera efectiva tus recursos financieros personales.",
        link: "/curso1",
      },
      {
        titulo: "Estrategias para el Exito Financiero",
        imagen: F2,
        descripcion:
          "Este curso aborda los principios fundamentales de las finanzas personales, incluyendo la creación de presupuestos, el ahorro, la inversión y la planificación para el retiro. Ofrece herramientas prácticas para gestionar de manera efectiva tus recursos financieros personales.",
        link: "/curso2",
      },
      {
        titulo: "Libertad Financiera",
        imagen: c9,
        descripcion:
          "Este curso se centra en el concepto de libertad financiera y proporciona estrategias para alcanzar metas financieras significativas. Cubre temas como el ahorro, la inversión, la reducción de deudas y la creación de un plan financiero personalizado.",
        link: "/curso3",
      },
    ],
  },
  {
    categoria: "Salud mental",
    cursos: [
      {
        titulo: "Introducción a la Mente Positiva",
        imagen: SM1,
        descripcion:
          "La psicología positiva se centra en el estudio de aspectos positivos de la experiencia humana, como la felicidad, la gratitud y el florecimiento personal. Este curso explora las teorías y prácticas de la psicología positiva para promover el bienestar mental.",
        link: "/curso4",
      },
      {
        titulo: "Mindfulness y Reducción de Estres",
        imagen: SM3,
        descripcion:
          "La atención plena, conocida como mindfulness en inglés, es una práctica que se centra en la conciencia plena y la atención al momento presente. El concepto tiene sus raíces en antiguas tradiciones contemplativas, como el budismo, pero en la actualidad se ha popularizado y adaptado en contextos secularizados y enfoques terapéuticos.",
        link: "/curso5",
      },
      {
        titulo: "Gestión del Estrés y Bienestar Emocional",
        imagen: SM2,
        descripcion:
          "Este curso se enfoca en estrategias prácticas para manejar el estrés y mejorar el bienestar emocional. Examina técnicas de afrontamiento, manejo del tiempo y prácticas que fomentan la resiliencia en situaciones estresantes.",
        link: "/curso6",
      },
    ],
  },
  {
    categoria: "Vida Sana",
    cursos: [
      {
        titulo: "Functional Fitness",
        imagen: VD1,
        descripcion:
          "Este curso se centra en el fitness funcional, que implica ejercicios diseñados para mejorar la capacidad del cuerpo para realizar actividades diarias de manera más efectiva. Puede incluir entrenamiento con peso corporal, ejercicios con equipamiento funcional y la incorporación de movimientos que imitan acciones cotidianas.",
        link: "/curso7",
      },
      {
        titulo: "Introducción a la Mente Positiva",
        descripcion:
          "La psicología positiva se centra en el estudio de la experiencia humana, como la felicidad, la gratitud y el florecimiento personal. Este curso explora las teorías y prácticas de la psicología positiva para promover el bienestar mental.",
        link: "/curso8",
      },
      {
        titulo: "Calistenia",
        imagen: VD3,
        descripcion:
          "Este curso se enfoca en el entrenamiento de peso corporal, también conocido como calistenia. Aprenderás técnicas para desarrollar fuerza, resistencia y flexibilidad utilizando principalmente tu propio peso como resistencia. El curso puede incluir ejercicios como flexiones, dominadas, fondos y progresiones avanzadas.",
        link: "/curso9",
      },
    ],
  },
];

const CursosApp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState(null);

  const filteredCursos = dataCursos
    .filter(
      (categoria) => !filterCategory || categoria.categoria === filterCategory
    )
    .map((categoria) => ({
      ...categoria,
      cursos: categoria.cursos.filter((curso) =>
        curso.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }));

  return (
    <>
      <section className="containerCourses">
        <div className="search-and-filters">
          <input
            type="text"
            placeholder="Buscar curso..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filterCategory || ""}
            onChange={(e) => setFilterCategory(e.target.value || null)}
          >
            <option value="">Todos</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Salud mental">Salud mental</option>
            <option value="Vida Sana">Vida Sana</option>
          </select>
        </div>
        {filteredCursos.map((categoria, index) => (
          <section key={index} className="my-component">
            <div className="subtitle">
              <span className="contenido">{categoria.categoria}</span>
            </div>
            {categoria.cursos.map((curso, cursoIndex) => (
              <div key={cursoIndex} className="course-info">
                <h2>{curso.titulo}</h2>
                <img
                  className="image"
                  src={curso.imagen}
                  alt={`Imagen ${cursoIndex + 1} curso`}
                />
                <p className="parrafoCurso">{curso.descripcion}</p>
                <div className={`btn-ingresar${cursoIndex + 1}`}>
                  <Link to={curso.link}>
                    <button>Ingresar</button>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        ))}
      </section>
    </>
  );
};

export default CursosApp;
