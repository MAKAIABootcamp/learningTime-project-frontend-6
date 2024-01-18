import React from "react";
import { useDispatch } from "react-redux";
import { setDonationType } from "../../store/infoDonation/infoDonationSlice";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./CardDonation.scss";

const CardDonation = ({ title, description, price, items }) => {
  const dispatch = useDispatch();

  const handleDonationClick = () => {
    const donationInfo = { title, description };
    dispatch(setDonationType(donationInfo));

    // Mostrar la información de la donación en la consola
    console.log("Donación realizada:", donationInfo);
  };

  return (
    <div className="card">
      <div className="educational-resources">
        <p className="resource-text">{title}</p>
      </div>

      <div className="amount">
        <div className="amount-text">
          <p className="amount-P">COL$ {price}</p>
          <p className="donation-description">{description}</p>
        </div>
        <Link to="/About" className="linkCard">
          <button className="button" onClick={handleDonationClick}>
            Donar
          </button>
        </Link>
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
