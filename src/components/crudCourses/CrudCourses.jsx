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
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const { courses } = useSelector((store) => store.course);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = {
      type,
      title,
      image,
      description,
      price,
    };
    dispatch(createCourse(course));

    clearFields();
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const course = {
      id,
      type,
      title,
      image,
      description,
      price,
    };
    dispatch(updateCourse(course));

    clearFields();
  };

  const handleDelete = (id) => {
    dispatch(deleteCourse(id));
  };

  const handleEdit = (item) => {
    setType(item.type);
    setTitle(item.title);
    setImage(item.image);
    setDescription(item.description);
    setPrice(item.price);
    setId(item.id);
  };

  const clearFields = () => {
    setId("");
    setType("");
    setTitle("");
    setImage("");
    setDescription("");
    setPrice(0);
  };

  return (
    <div className="Courses">
      <div className="containerForm" style={{ margin: "20px" }}>
        <Form>
          <h1 className="titleCourses">CRUD Cursos</h1>
          <Form.Group controlId="formId" className="mb-3">
            <Form.Control type="text" readOnly hidden value={id} />
          </Form.Group>

          <Form.Group controlId="formType" className="mb-3">
            <MdOutlineSubtitles className="iconsCourse" />

            <Form.Label>Tipo de curso</Form.Label>
            <Form.Control
              type="text"
              value={type}
              placeholder="Ingrese el tipo de curso"
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formTitle" className="mb-3">
            <LuType className="iconsCourse" />
            <Form.Label>Título del curso</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Ingrese el título del curso"
              onChange={(e) => setTitle(e.target.value)}
            />
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
            <Form.Label>Descripción del curso</Form.Label>
            <Form.Control
              type="text"
              value={description}
              placeholder="Ingrese la descripción del curso"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPrice" className="mb-3">
            <MdOutlinePriceChange className="iconsCourse" />
            <Form.Label>Precio del curso</Form.Label>
            <Form.Control
              type="number"
              value={price}
              placeholder="Ingrese el precio del curso"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={(e) => handleSubmit(e)}
            className="ms-2"
          >
            Enviar curso
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
                  {" "}
                  <MdOutlineSubtitles className="iconsCourse" />
                  Tipo:
                </span>
                <span>{item.type}</span>
              </div>
              <div>
                <span>
                  {" "}
                  <LuType className="iconsCourse" /> Título:
                </span>
                <span>{item.title}</span>
              </div>
              <div>
                <span>
                  <FaImage className="iconsCourse" />
                  Imagen:
                </span>
                <span>{item.image}</span>
              </div>
              <div>
                <span>
                  {" "}
                  <MdOutlineDescription className="iconsCourse" /> Descripción:
                </span>
                <span>{item.description}</span>
              </div>
              <div>
                <span>
                  <MdOutlinePriceChange className="iconsCourse" />
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

export default CrudCourses;
