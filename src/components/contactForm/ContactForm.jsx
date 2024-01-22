import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ContactForm.scss";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ButtonPayment from "../ButtonPayment/ButtonPayment";
import { savePersonalInformation } from "../../store/personalInformation/personalInformationActions";

function ContactForm() {
  const dispatch = useDispatch();
  const personalInformation = useSelector((state) => state.personalInformation);

  const handleSavePersonalInformation = (data) => {
    dispatch(savePersonalInformation(data));
  };

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
                    <Form.Control
                      onChange={(e) =>
                        handleSavePersonalInformation({ name: e.target.value })
                      }
                      value={personalInformation.name}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        handleSavePersonalInformation({
                          lastName: e.target.value,
                        })
                      }
                      value={personalInformation.lastName}
                    />
                  </Col>
                </Row>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    onChange={(e) =>
                      handleSavePersonalInformation({ email: e.target.value })
                    }
                    value={personalInformation.email}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Número celular</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      handleSavePersonalInformation({
                        phoneNumber: e.target.value,
                      })
                    }
                    value={personalInformation.phoneNumber}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Número de documento</Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      handleSavePersonalInformation({
                        idNumber: e.target.value,
                      })
                    }
                    value={personalInformation.idNumber}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Añade nota/ comentario.</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    onChange={(e) =>
                      handleSavePersonalInformation({ note: e.target.value })
                    }
                    value={personalInformation.note}
                  />
                </Form.Group>
                <ButtonPayment />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
