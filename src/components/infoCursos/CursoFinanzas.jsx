import "./Inf.scss";
import c7 from "./images/curso7.png";
import c8 from "./images/curso8.png";
import c9 from "./images/curso9.png";

const CursoFinanzas = () => {
  return (
    <>
      <section className="my-component">
        <div className="subtitle">
          <span className="contenido">Finanzas</span>
        </div>
      <div className="course-info">
        <h2>Finanzas Personales
        <br />
        <br />
        </h2>
        <img className="image" src={c7} alt="Imagen septimo curso" />
        <p>
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
        <img className="image" src={c8} alt="Imagen octavo curso" />
        <p>
          Este curso aborda los principios fundamentales de las finanzas
          personales, incluyendo la creación de presupuestos, el ahorro, la
          inversión y la planificación para el retiro. Ofrece herramientas
          prácticas para gestionar de manera efectiva tus recursos financieros
          personales.
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
        <p>
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
    </>
  )
}

export default CursoFinanzas