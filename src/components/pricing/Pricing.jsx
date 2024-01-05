import React from "react";
import "./Pricing.scss";
import DonationsContainer from "../donationsContainer/DonationsContainer";

function Pricing() {
  return (
    <div className="Pricing">
      <div className="contanine">
        <div className="text">
          <p>Si te gusta nuestro contenido ¡Apóyanos! </p>

          <h3 className="text-subtitulo">
            Nuestra plataforma nos permite por medio de donaciones <br />
            ayudar y gestionar recursos para expandir nuestra comunidad e
            igualmente <br /> apoyar fundaciones con fines educativos.
          </h3>
        </div>
      </div>
      <DonationsContainer />
    </div>
  );
}

export default Pricing;
