import React from "react";
import "./ContactForm.scss";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function ContactForm() {
  return (
    <>
      <div className="Container-Contact">
        <div className="ContNameContact">
          <div className="Info-Contact">
            <div className="text-Contact">
              <p>Información personal</p>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control />
                  </Col>
                  <Col>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control />
                  </Col>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Número celular</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Añade nota/ comentario.</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button type="submit" className="ButtonContac">
                  Enviar
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
