import React from "react";
import "./Accordion.scss";
import Video from "../Video/Video";

function Accordion() {
  return (
    <div className="cont">
      <h1 className="title">Contenido</h1>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Módulo 1: Fundamentos de la Mentalidad Positiva
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              ✔ Definición y concepto de mentalidad positiva.
              <br></br>✔ Importancia de la mentalidad positiva en la salud
              mental y el bienestar.
              <br></br>✔ Diferencias entre mentalidad positiva y mentalidad
              negativa.
              <br></br>✔ Impacto de la mentalidad positiva en la toma de
              decisiones y la resiliencia.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Módulo 2: Desarrollo de Hábitos Positivos
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              ✔ Identificación de patrones de pensamiento negativo y cómo
              cambiarlos.
              <br></br>✔ Establecimiento de metas realistas y motivadoras.
              <br></br>✔ Prácticas diarias para fomentar la positividad.
              <br></br>✔ Creación de un entorno propicio para mantener una
              mentalidad positiva.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Módulo 3: Gestión del Estrés y la Adversidad
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              ✔ Estrategias para manejar el estrés y la presión.
              <br></br>✔ Afrontamiento positivo ante situaciones adversas.
              <br></br>✔ Desarrollo de la resiliencia emocional.
              <br></br>✔ Técnicas de mindfulness y meditación para promover la
              tranquilidad mental.
            </div>
          </div>
        </div>
      </div>
      <Video />
    </div>
  );
}

export default Accordion;
