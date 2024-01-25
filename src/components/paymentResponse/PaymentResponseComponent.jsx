import React, { useEffect, useState } from "react";

const PaymentResponseComponent = () => {
  const [responseData, setResponseData] = useState({
    x_transaction_date: "",
    x_response: "",
    x_id_invoice: "",
    x_response_reason_text: "",
    x_transaction_id: "",
    x_bank_name: "",
    x_approval_code: "",
    x_amount: "",
    x_currency_code: "",
  });

  const getQueryParam = (param) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
  };

  useEffect(() => {
    const ref_payco = getQueryParam("ref_payco");
    const urlapp = `https://secure.epayco.co/validation/v1/reference/${ref_payco}`;

    fetch(urlapp)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const {
            x_cod_response,
            x_transaction_date,
            x_response,
            x_id_invoice,
            x_response_reason_text,
            x_transaction_id,
            x_bank_name,
            x_approval_code,
            x_amount,
            x_currency_code,
          } = data.data;

          // Handle different x_cod_response values
          switch (parseInt(x_cod_response, 10)) {
            case 1:
              alert("Transacción Aprobada");
              console.log("Transacción aceptada");
              break;
            case 2:
              console.log("Transacción rechazada");
              break;
            case 3:
              console.log("Transacción pendiente");
              break;
            case 4:
              console.log("Transacción fallida");
              break;
            default:
              break;
          }

          setResponseData({
            x_transaction_date,
            x_response,
            x_id_invoice,
            x_response_reason_text,
            x_transaction_id,
            x_bank_name,
            x_approval_code,
            x_amount,
            x_currency_code,
          });
        } else {
          alert("Error consultando la información");
        }
      });
  }, []);

  return (
    <div>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-lg-8 col-lg-offset-2">
            <h4 style={{ textAlign: "left" }}> Respuesta de la Transacción </h4>
            <hr />
          </div>
          <div className="col-lg-8 col-lg-offset-2">
            <div className="table-responsive">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Referencia</td>
                    <td id="referencia">{responseData.x_id_invoice}</td>
                  </tr>
                  <tr>
                    <td className="bold">Fecha</td>
                    <td id="fecha" className="">
                      {responseData.x_transaction_date}
                    </td>
                  </tr>
                  <tr>
                    <td>Respuesta</td>
                    <td id="respuesta">{responseData.x_response}</td>
                  </tr>
                  <tr>
                    <td>Motivo</td>
                    <td id="motivo">{responseData.x_response_reason_text}</td>
                  </tr>
                  <tr>
                    <td className="bold">Banco</td>
                    <td className="" id="banco">
                      {responseData.x_bank_name}
                    </td>
                  </tr>
                  <tr>
                    <td className="bold">Recibo</td>
                    <td id="recibo">{responseData.x_transaction_id}</td>
                  </tr>
                  <tr>
                    <td className="bold">Total</td>
                    <td
                      className=""
                      id="total"
                    >{`${responseData.x_amount} ${responseData.x_currency_code}`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Add your footer content here */}
    </div>
  );
};

export default PaymentResponseComponent;
