import React from "react";
// import responsePage from "../../Helpers/epayco/response.html";

const ButtonPayment = () => {
  const openchekout = (e) => {
    e.preventDefault();
    const handler = window.ePayco.checkout.configure({
      key: "acb588487eee9761a8694cbdc7e6054e",
      test: true,
    });

    const data = {
      name: "Vestido Mujer Primavera",
      description: "Vestido Mujer Primavera",
      invoice: "12345",
      currency: "cop",
      amount: "119000",
      tax_base: "100000",
      tax: "19000",
      country: "co",
      lang: "en",
      external: "false",
      extra1: "extra1",
      extra2: "extra2",
      extra3: "extra3",
      confirmation: "http://confirmacion.php",
      response: "ruta de respusta jsx",
      name_billing: "john doe",
      address_billing: "Carrera 19 numero 14 91",
      type_doc_billing: "cc",
      mobilephone_billing: "3050000000",
      number_doc_billing: "100000000",
      email_billing: "example@mail.co",
      acepted: "ruta de aceptacion",
    };
    handler.open(data);
  };
  return (
    <>
      <img
        className="buttonPayment"
        src="https://multimedia.epayco.co/dashboard/btns/btn2.png"
        onClick={openchekout}
      />
      {/* <button onClick={openCheckout}>Pagar</button> */}
    </>
  );
};

export default ButtonPayment;
