//import React from 'react'
import "../coursePage/Cursos.scss"
import { Link } from "react-router-dom";
import SM3 from "./images/SM3.png"
import SM1 from "./images/SM1.png"
import SM2 from "./images/SM2.png"
import VD1 from "./images/VD1.png"
import VD2 from "./images/VD2.png"
import VD3 from "./images/VD3.png"
import F1 from "./images/F1.png"
import F2 from "./images/F2.png"
import c9 from "./images/curso9.png";

const CursosApp = () => {
    return (
        <>
            <section className="containerCourses">
                <section className="my-component">
                    <div className="subtitle">
                        <span className="contenido">Finanzas</span>
                    </div>
                    <div className="course-info">
                        <h2>Finanzas Personales
                            <br />
                            <br />
                        </h2>
                        <img className="image" src={F1} alt="Imagen septimo curso" />
                        <p className="parrafoCurso">
                            Este curso aborda los principios fundamentales de las finanzas
                            personales, incluyendo la creación de presupuestos, el ahorro, la
                            inversión y la planificación para el retiro. Ofrece herramientas
                            prácticas para gestionar de manera efectiva tus recursos financieros
                            personales.
                        </p>
                        <div className="btn-ingresar7">
                            <button>Ingresar</button>
                        </div>
                    </div>
                    <div className="course-info">
                        <h2>Estrategias para el Exito Financiero</h2>
                        <img className="image" src={F2} alt="Imagen octavo curso" />
                        <p className="parrafoCurso">
                            Descubre y aprende estrategias clave para alcanzar el éxito financiero en este curso, donde explorarás conceptos fundamentales de ahorro, inversión, presupuesto y planificación financiera. Adquiere las herramientas necesarias para tomar decisiones financieras sólidas y construir un futuro económico próspero.
                        </p>
                        <div className="btn-ingresar8">
                            <button>Ingresar</button>
                        </div>
                    </div>
                    <div className="course-info">
                        <h2>Libertad Financiera
                            <br />
                            <br />
                        </h2>
                        <img className="image" src={c9} alt="Imagen noveno curso" />
                        <p className="parrafoCurso">
                            Este curso se centra en el concepto de libertad financiera y
                            proporciona estrategias para alcanzar metas financieras
                            significativas. Cubre temas como el ahorro, la inversión, la reducción
                            de deudas y la creación de un plan financiero personalizado.
                        </p>
                        <div className="btn-ingresar9">
                            <button>Ingresar</button>
                        </div>
                    </div>
                </section>
                <section className="my-component">
                    <div className="subtitle">
                        <span className="contenido">Salud mental</span>
                    </div>

                    <div className="course-info">
                        <h2>Introducción a la Mente Positiva</h2>
                        <img className="image" src={SM1} alt="Imagen segundo curso" />
                        <p className="parrafoCurso">
                            La psicología positiva se centra en el estudio de aspectos positivos
                            de la experiencia humana, como la felicidad, la gratitud y el
                            florecimiento personal. Este curso explora las teorías y prácticas
                            de la psicología positiva para promover el bienestar mental.
                            <div className="btn-ingresar2">
                                <Link to="/Class">
                                    <button>Ingresar</button>
                                </Link>
                            </div>
                        </p>
                    </div>
                    <div className="course-info">
                        <h2>Mindfulness y Reducción de Estres</h2>
                        <img className="image" src={SM3} alt="Imagen primer curso" />
                        <p className="parrafoCurso">
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
                        <h2>Gestión del Estrés y Bienestar Emocional</h2>
                        <img className="image" src={SM2} alt="Imagen tercer curso" />
                        <p className="parrafoCurso">
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
                <section className="my-component">
                    <div className="subtitle">
                        <span className="contenido">Vida Sana</span>
                    </div>
                    <div className="course-info">
                        <h2>Functional Fitness
                            <br />
                            <br />
                        </h2>
                        <img className="image" src={VD1} alt="Imagen cuarto curso" />
                        <p className="parrafoCurso">
                            Este curso se centra en el fitness funcional, que implica ejercicios diseñados para mejorar la capacidad del cuerpo para realizar actividades diarias de manera más efectiva. Puede incluir
                            entrenamiento con peso corporal, ejercicios con equipamiento funcional y la incorporación de movimientos que imitan acciones cotidianas.
                        </p>
                        <div className="btn-ingresar4">
                            <button>Ingresar</button>
                        </div>
                    </div>
                    <div className="course-info">
                        <h2>Psicologia Positiva <br /><br /></h2>
                        <img className="image" src={VD2} alt="Imagen quinto curso" />
                        <p className="parrafoCurso">
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
                        <img className="image" src={VD3} alt="Imagen sexto curso" />
                        <p className="parrafoCurso">
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
            </section>
        </>
    )
}

export default CursosApp
