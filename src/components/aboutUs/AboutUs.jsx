import React from "react";
import "./AboutUs.scss";
import about from "../coursePage/images/about.png";
import mision from "../coursePage/images/mision.png";
import vision from "../coursePage/images/vision.png";

const AboutUs = () => {
  return (
    <>
      <div className="About">
        <div className="containerAbout">
          <h3 className="titulo">
            <br />
            <b>¿QUIÉNES SOMOS?</b>
            <br />
            <br />
          </h3>
          <h5 className="historia">
            Learning Time fue creado en el año 2023 en la ciudad de Medellín por
            iniciativa de un grupo de líderes, la cual se materializó
            inicialmente como una organización de estudios. Dicho propósito
            busca satisfacer las necesidades evidenciadas en los estudiantes,
            así fue como se formuló un proyecto educativo, con el cuál nació
            LEARNING TIME.
            <br />
            <br />
            Los estudiantes, como principal público, encontrarán en nuestra
            aplicación un amplio y diverso contenido. Nuestro enfoque se centra
            en brindar soluciones, para aquellos que buscan superar obstáculos y
            mejorar su bienestar en su viaje educativo y personal.
            <br />
            <br />
            Sin embargo, nos distinguimos por nuestro enfoque integral en la
            educación, ofreciendo una plataforma que no solo se centra en la
            salud mental, sino que también abarca áreas clave como las finanzas
            y otros aspectos fundamentales para el crecimiento holístico de los
            estudiantes y comunidad en general. Esta combinación de contenido
            diverso y especializado es lo que diferencia y enriquece nuestra
            plataforma.
          </h5>
        </div>
        <div className="img">
          <img className="image" src={about} alt="Img vista about" />
        </div>
      </div>

      <div className="About">
        <div className="img">
          <img className="image" src={mision} alt="Img vista mision" />
        </div>
        <div className="containerAbout">
          <h3 className="titulo">
            <br />
            <b>MISIÓN</b>
            <br />
            <br />
          </h3>
          <h5 className="historiaa">
            En Learning Time, nos dedicamos apasionadamente a empoderar a las
            personas a través de la educación para la vida, brindando
            herramientas y recursos accesibles que promuevan el desarrollo
            integral y sostenible de individuos en todas las etapas de su
            trayectoria. Nuestra misión se centra en cultivar habilidades
            prácticas, fomentar el bienestar emocional y nutrir el crecimiento
            personal, facilitando así el camino hacia una vida plena y
            significativa.
            <br />
            <br />
            Objetivos Principales:
            <br />
            <br />
            ✓ Educación Integral <br />
            ✓ Accesibilidad Universal <br />
            ✓ Desarrollo Sostenible <br />
            ✓ Aprendizaje Interactivo <br />✓ Énfasis en el Empoderamiento
            Personal
          </h5>
        </div>
      </div>

      <div className="About">
        <div className="containerAbout">
          <h3 className="titulo">
            <br />
            <b>
              {" "}
              <br />
              VISIÓN
            </b>
            <br />
            <br />
          </h3>
          <h5 className="historiaaa">
            En Learning Time, visualizamos un mundo donde cada individuo,
            independientemente de su origen, edad o contexto, tiene acceso a una
            educación para la vida que no solo enriquece sus habilidades
            prácticas, sino que también nutre su bienestar emocional y promueve
            su crecimiento personal. <br /> <br />
            Imaginamos comunidades globales interconectadas, donde el
            conocimiento es una herramienta poderosa para la transformación
            positiva, inspirando a las personas a vivir vidas significativas y
            contribuir activamente al bienestar colectivo. Aspiramos a ser
            líderes en la revolución educativa, guiando a las generaciones
            presentes y futuras hacia un futuro sostenible, equitativo y lleno
            de posibilidades para todos.
          </h5>
        </div>
        <div className="img">
          <img className="image" src={vision} alt="Img vista about" />
        </div>
      </div>
    </>
  );
};
export default AboutUs;
