// CardDonation.jsx
import React from "react";
import "./CardDonation.scss";
import { FaCircleCheck } from "react-icons/fa6";

const CardDonation = ({ title, description, items }) => {
  return (
    <div className="card">
      <div className="educational-resources">
        <p className="resource-text">{title}</p>
      </div>

      <div className="amount">
        <div className="amount-text">
          <p>Ingresa tu valor</p>
          <p className="donation-description">{description}</p>
        </div>

        <div className="button">
          <button>Donar</button>
        </div>
      </div>

      <div className="lists">
        {items.map((item, index) => (
          <div key={index} className="list-item">
            <FaCircleCheck className="list-item-icono" />
            <p className="list-item-parrafo">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDonation;
