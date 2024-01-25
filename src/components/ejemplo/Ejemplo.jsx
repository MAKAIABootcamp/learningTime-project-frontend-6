import React, { useState } from "react";
import "./Ejemplo.scss";
import Carrucel1 from "./carrucel1";
import Carrucel2 from "./carrucel2";
import Carrucel3 from "./carrucel3";
import PaymentResponseComponent from "../../components/paymentResponse/PaymentResponseComponent";

function Ejemplo() {
  const [index, setIndex] = useState(1);

  const carruselFuncion = (p) => {
    if (p == "s") {
      if (index == 3) {
        setIndex(1);
      } else {
        setIndex(index + 1);
      }
    }
    if (p == "r") {
      if (index <= 1) {
        setIndex(3);
      } else {
        setIndex(index - 1);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => {
          carruselFuncion("r");
        }}
      >
        izquierdo
      </button>
      <div>
        {index == 1 && <Carrucel1 />}
        {index == 2 && <Carrucel2 />}
        {index == 3 && <Carrucel3 />}
      </div>
      <button
        onClick={() => {
          carruselFuncion("s");
        }}
      >
        derecho
      </button>
      <PaymentResponseComponent />
    </>
  );
}

export default Ejemplo;
