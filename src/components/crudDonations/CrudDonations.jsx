import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createDonation,
  deleteDonation,
  getDonations,
  updateDonation,
} from "../../store/donations/DonationActions";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button, Form, ListGroup } from "react-bootstrap";
import "./CrudDonations.scss";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { LuLayoutList, LuType } from "react-icons/lu";

function CrudDonations() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const { donations } = useSelector((store) => store.donation);

  useEffect(() => {
    dispatch(getDonations());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const donation = {
      title,
      description,
      items,
      price,
    };
    dispatch(createDonation(donation));

    clearFields();
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const donation = {
      id,
      title,
      description,
      items,
      price,
    };
    dispatch(updateDonation(donation));

    clearFields();
  };

  const handleDelete = (id) => {
    dispatch(deleteDonation(id));
  };

  const handleEdit = (item) => {
    setTitle(item.title);
    setDescription(item.description);
    setItems(item.items);
    setPrice(item.price);
    setId(item.id);
  };

  const clearFields = () => {
    setId("");
    setTitle("");
    setDescription("");
    setItems([]);
    setPrice(0);
  };

  return (
    <div className="Donations">
      <div className="containerForm" style={{ margin: "20px" }}>
        <Form>
          <h1 className="title">CRUD Donaciones</h1>
          <Form.Group controlId="formId" className="mb-3">
            <Form.Control type="text" readOnly hidden value={id} />
          </Form.Group>

          <Form.Group controlId="formTitle" className="mb-3">
            <LuType className="iconsDonation" />
            <Form.Label>Título de donación</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Ingrese el título de la donación"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mb-3">
            <MdOutlineDescription className="iconsDonation" />
            <Form.Label>Descripción de donación</Form.Label>
            <Form.Control
              type="text"
              value={description}
              placeholder="Ingrese la descripción de la donación"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formItems" className="mb-3">
            <LuLayoutList className="iconsDonation" />

            <Form.Label>Ítems de donación (separados por comas)</Form.Label>
            <Form.Control
              type="text"
              value={items.join(", ")}
              placeholder="Ingrese los ítems de la donación"
              onChange={(e) =>
                setItems(e.target.value.split(", ").map((item) => item.trim()))
              }
            />
          </Form.Group>

          <Form.Group controlId="formPrice" className="mb-3">
            <MdOutlinePriceChange className="iconsDonation" />
            <Form.Label>Precio de donación</Form.Label>
            <Form.Control
              type="number"
              value={price}
              placeholder="Ingrese el precio de la donación"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={(e) => handleSubmit(e)}
            className="ms-2"
          >
            Enviar donación
          </Button>
          <Button
            variant="secondary"
            onClick={(e) => handleSubmitEdit(e)}
            className="ms-2"
          >
            Editar
          </Button>
        </Form>
      </div>

      <div className="listDonations">
        <ListGroup className="flex-column w-100 ">
          {donations.map((item) => (
            <ListGroup.Item key={item.id} className="mb-3">
              <div>
                <span>
                  {" "}
                  <LuType className="iconsDonation" />
                  Título:
                </span>
                <span>{item.title}</span>
              </div>
              <div>
                <span>
                  {" "}
                  <MdOutlineDescription className="iconsDonation" />{" "}
                  Descripción:
                </span>
                <span>{item.description}</span>
              </div>
              <div>
                <span>
                  <LuLayoutList className="iconsDonation" />
                  Ítems:
                </span>
                <span>{item.items}</span>
              </div>
              <div>
                <span>
                  <MdOutlinePriceChange className="iconsDonation" />
                  Precio:
                </span>
                <span>${item.price}</span>
              </div>
              <Button
                variant="warning"
                onClick={() => handleEdit(item)}
                className="ms-2"
              >
                <FaEdit />
              </Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(item.id)}
                className="ms-2"
              >
                <MdDelete />
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default CrudDonations;
