import React from "react";
import "./ButtonPayment.scss";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const ButtonPayment = () => {
  const donationInfo = useSelector((state) => state.infoDonation.donationType);
  const { selectedAmount } = useSelector((state) => state.price);
  const personalInformation = useSelector((state) => state.personalInformation);

  const openCheckout = (e) => {
    e.preventDefault();
    const handler = window.ePayco.checkout.configure({
      key: "acb588487eee9761a8694cbdc7e6054e",
      test: true,
    });

    const data = {
      name: donationInfo?.title || "Default Title",
      description: donationInfo?.title || "Default Description",
      invoice: "12345",
      currency: "cop",
      amount: selectedAmount || "119000",
      country: "co",
      response: "ruta de respusta jsx",
      name_billing: personalInformation.name || "John Doe",
      address_billing: "Carrera 19 numero 14 91",
      type_doc_billing: "cc",
      mobilephone_billing: personalInformation.phoneNumber || "3050000000",
      number_doc_billing: personalInformation.idNumber || "100000000",
      email_billing: personalInformation.email || "example@mail.co",
      acepted: "ruta de aceptacion",
    };

    handler.open(data);
  };

  return (
    <>
      <button onClick={openCheckout} className="buttonPayment">
        <FaShoppingCart className="iconPayment" />
        Pagar ahora
      </button>
    </>
  );
};

export default ButtonPayment;
