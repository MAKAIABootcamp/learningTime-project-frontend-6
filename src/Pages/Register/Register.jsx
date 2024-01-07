import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaImage } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import uploadFile from "../../services/fileUpload";
import { createAnAccountAsync } from "../../store/users/userActions";

function Register() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const handleRegister = async (data) => {
    const photoURL = await uploadFile(data.image[0]);
    console.log(photoURL);
    const newUser = { ...data, photoURL };
    dispatch(createAnAccountAsync(newUser));
  };
  return (
    <div className="body">
      <div className="wrapper">
        <form onSubmit={handleSubmit(handleRegister)}>
          <h1>Register</h1>
          <div className="input-box">
            <input
              className="registerInput"
              type="text"
              placeholder="Nombre de usuario"
              {...register("name")}
            />
            <FaUser className="icono" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="email"
              required
              {...register("email")}
            />
            <MdEmail className="icono" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="contraseña"
              required
              {...register("password")}
            />
            <FaLock className="icono" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="confirmar Contraseña"
              required
              {...register("confirmedPassword")}
            />
            <FaLock className="icono" />
          </div>

          <div className="input-box-file">
            <input
              className="input-file"
              type="file"
              id="fileInput"
              {...register("image")}
            />
            <label htmlFor="fileInput" className="label-file">
              <span>Seleccione Imagen</span>
              <FaImage className="icono" />
            </label>
          </div>

          <div className="button">
            <button type="submit">Crear cuenta</button>
          </div>
          <div className="Register-link">
            <p>
              Si ya tienes cuenta registrada iniciar sesión,
              <Link to="/login">aquí</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
