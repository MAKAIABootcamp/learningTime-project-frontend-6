import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./FromDonation.scss";
import { Link } from "react-router-dom";

function FromDonation() {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label style={{ color: "#ffffff" }}>Elige otro monto</Form.Label>
        <Form.Control
          type="text"
          placeholder="$ 0"
          className="custom-placeholder"
          style={{
            borderRadius: "10px",
            borderColor: "#ffffff",
            backgroundColor: "#029B94",
            color: "#ffffff",
            border: "2px solid #ffffff",
          }}
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
          Enviar Donación
        </Button>
      </Link>
    </Form>
  );
}

export default FromDonation;
