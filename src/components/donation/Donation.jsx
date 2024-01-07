import React, { useState } from "react";
import "./Donation.scss";
import { IoShieldHalfSharp } from "react-icons/io5";
import FromDonation from "../fromDonation/FromDonation";
import SelectPrice from "../selectprice/SelectPrice";
import donationImage from "../../../public/Images/donation.png";
const Donation = () => {
  return (
    <div className="donate">
      <div className="cont-donate">
        <div className="donation-form">
          <div className="seguro">
            <IoShieldHalfSharp className="icon-seguro" />
            <h5 className="title-seguro">Donación Segura</h5>
          </div>
          <div className="title">
            Tu ayuda es fundamental <br />
            Nos permite proporcionar becas educativas <br />
            Para el aprendizaje de 1.380 estudiantes
          </div>

          <div className="price">
            <SelectPrice />
          </div>

          <div className="form">
            <FromDonation />
          </div>
        </div>

        <div className="image"></div>
      </div>
    </div>
  );
};

export default Donation;
