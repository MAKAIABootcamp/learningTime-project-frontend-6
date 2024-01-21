import React from "react";
import "./AboutUs.scss";
import about from "../coursePage/images/about.png"

const AboutUs = () => {
  return (
    <div className="About">
      <div className="containerAbout">
        <h3 className="titulo"><br /><b>¿QUIÉNES SOMOS?</b><br /><br /></h3>
        <h5 className="historia">
          Learning Time fue creado en el año 2023 en la ciudad de Medellín por
          iniciativa de un grupo de líderes, la cual se materializó
          inicialmente como una organización de estudios. Dicho propósito busca
          satisfacer las necesidades evidenciadas en los estudiantes, así fue
          como se formuló un proyecto educativo, con el cuál nació
          LEARNING TIME.
          <br />
          <br />
          Los estudiantes, como principal público, encontrarán en nuestra
          aplicación un amplio y diverso contenido. Nuestro enfoque se centra en brindar soluciones, para
          aquellos que buscan superar obstáculos y mejorar su bienestar en su
          viaje educativo y personal.
          <br />
          <br />
          Sin embargo, nos distinguimos por nuestro enfoque integral en
          la educación, ofreciendo una plataforma que no solo se centra en la
          salud mental, sino que también abarca áreas clave como las finanzas y otros aspectos fundamentales para el crecimiento holístico de
          los estudiantes y comunidad en general. Esta combinación de contenido diverso y especializado
          es lo que diferencia y enriquece nuestra plataforma.
        </h5>
      </div>
      <div className="img">
        <img className="image" src={about} alt="Img vista about" />
      </div>
    </div>
  );
};
export default AboutUs;
