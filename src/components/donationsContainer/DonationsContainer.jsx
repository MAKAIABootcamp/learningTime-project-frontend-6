import React from "react";

import "./DonationsContainer.scss";
import CardDonation from "../cardDonation/CardDonation";

const DonationsContainer = () => {
  const donationsData = [
    {
      title: "Recursos educativos",
      description:
        "Tu donación puede encender la chispa del conocimiento en mentes ávidas de aprender.",
      items: [
        "Bibliotecas comunitarias",
        "Programa de becas estudiantiles",
        "Equipamiento tecnológico",
        "Materiales educativos",
      ],
    },
    {
      title: "Innovación Educativa",
      description:
        "¡Tu generosidad crea oportunidades que perduran para siempre!",
      items: [
        "Expansión de nuestra app",
        "Invitación de expertos",
        "Capacitaciones",
        "Desarrollo de contenido educativo",
      ],
    },
    // Puedes agregar más objetos de datos para cada donación
  ];

  return (
    <div className="donations-container">
      {donationsData.map((donation, index) => (
        <CardDonation key={index} {...donation} />
      ))}
    </div>
  );
};

export default DonationsContainer;
