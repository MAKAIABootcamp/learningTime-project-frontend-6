import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAmount } from "../../store/price/priceSlice";

import "./FromDonation.scss";

function FromDonation() {
  const dispatch = useDispatch();
  const selectedAmountRedux = useSelector(
    (state) => state.price.selectedAmount
  );

  const handleCustomAmountChange = (event) => {
    const inputAmount = event.target.value;
    dispatch(setSelectedAmount(inputAmount));
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label style={{ color: "#ffffff" }}>Elige otro monto</Form.Label>
        <Form.Control
          type="text"
          placeholder={selectedAmountRedux || "$ 0"}
          className="custom-placeholder"
          style={{
            borderRadius: "10px",
            borderColor: "#ffffff",
            backgroundColor: "#029B94",
            color: "#ffffff",
            border: "2px solid #ffffff",
          }}
          onChange={handleCustomAmountChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="selectDonation" style={{ color: "#ffffff" }}>
          ¿En qué moneda te gustaría donar?
        </Form.Label>
        <Form.Select
          id="selectDonation"
          aria-label="Default select example"
          style={{
            borderRadius: "10px",
            borderColor: "#ffffff",
            backgroundColor: "#029B94",
            color: "#ffffff",
            border: "2px solid #ffffff",
          }}
        >
          <option>Pesos colombianos</option>
          <option value="1">Pesos chilenos</option>
          <option value="2">Dólar estadounidense</option>
        </Form.Select>
      </Form.Group>
      <Link to="/Contact">
        <Button
          variant="primary"
          type="submit"
          style={{
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            color: "#029B94",
            border: "2px solid #ffffff",
          }}
        >
          Donar
        </Button>
      </Link>
    </Form>
  );
}

export default FromDonation;
