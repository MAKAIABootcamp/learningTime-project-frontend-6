import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
} from "../../store/course/CourseActions";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Button, Form, ListGroup } from "react-bootstrap";
import { MdOutlineSubtitles } from "react-icons/md";
import { MdOutlineDescription } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import "./CrudCourses.scss";
import { LuType } from "react-icons/lu";
import { FaImage } from "react-icons/fa";

function CrudCourses() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [certification, setCertification] = useState(true);

  const dispatch = useDispatch();
  const { courses } = useSelector((store) => store.course);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = {
      title,
      category,
      image,
      description,
      price,
      certification,
    };
    dispatch(createCourse(course));

    clearFields();
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const course = {
      id,
      title,
      category,
      image,
      description,
      price,
      certification,
    };
    dispatch(updateCourse(course));

    clearFields();
  };

  const handleDelete = (id) => {
    dispatch(deleteCourse(id));
  };

  const handleEdit = (item) => {
    setTitle(item.title);
    setCategory(item.category);
    setImage(item.image);
    setDescription(item.description);
    setPrice(item.price);
    setCertification(item.certification);
    setId(item.id);
  };

  const clearFields = () => {
    setId("");
    setTitle("");
    setCategory("");
    setImage("");
    setDescription("");
    setPrice(0);
    setCertification(true);
  };

  return (
    <div className="Courses">
      <div className="containerForm" style={{ margin: "20px" }}>
        <Form>
          <h1 className="titleCourses">Gestionar Cursos</h1>
          <Form.Group controlId="formId" className="mb-3">
            <Form.Control type="text" readOnly hidden value={id} />
          </Form.Group>

          <Form.Group controlId="formTitle" className="mb-3">
            <LuType className="iconsCourse" />
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Ingrese el título"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCategory" className="mb-3">
            <MdOutlineSubtitles className="iconsCourse" />
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Seleccionar Categoría</option>
              <option value="Finanzas">Finanzas</option>
              <option value="Salud mental">Salud mental</option>
              <option value="Vida Sana">Vida Sana</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formImage" className="mb-3">
            <FaImage className="iconsCourse" />
            <Form.Label>URL de la imagen</Form.Label>
            <Form.Control
              type="text"
              value={image}
              placeholder="Ingrese la URL de la imagen"
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mb-3">
            <MdOutlineDescription className="iconsCourse" />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              value={description}
              placeholder="Ingrese la descripción"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPrice" className="mb-3">
            <MdOutlinePriceChange className="iconsCourse" />
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              value={price}
              placeholder="Ingrese el precio"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCertification" className="mb-3">
            <MdOutlineSubtitles className="iconsCourse" />
            <Form.Label>Certificación</Form.Label>
            <Form.Control
              as="select"
              value={certification}
              onChange={(e) => setCertification(e.target.value === "true")}
            >
              <option value="true">Con Certificación</option>
              <option value="false">Sin Certificación</option>
            </Form.Control>
          </Form.Group>

          <Button
            variant="primary"
            onClick={(e) => handleSubmit(e)}
            className="ms-2"
          >
            Agregar
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

      <div className="listCourses">
        <ListGroup className="flex-column w-100 ">
          {courses.map((item) => (
            <ListGroup.Item key={item.id} className="mb-3">
              <div>
                <span>
                  <LuType className="iconsCourse" />
                  Título:
                </span>
                <span>{item.title}</span>
              </div>
              <div>
                <span>
                  <MdOutlineSubtitles className="iconsCourse" />
                  Categoría:
                </span>
                <span>{item.category}</span>
              </div>
              <div>
                <span>
                  <MdOutlineSubtitles className="iconsCourse" />
                  Certificación:
                </span>
                <span>
                  {item.certification
                    ? "Con Certificación"
                    : "Sin Certificación"}
                </span>
              </div>
              {/* ... Otros campos del curso */}
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

export default CrudCourses;
