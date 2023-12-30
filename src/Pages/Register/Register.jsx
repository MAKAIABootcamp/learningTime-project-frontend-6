import React from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaImage } from "react-icons/fa6";
import '../login/login.css'

function Register() {
  return (
    <div className="body">
      <div className="wrapper">
        <form>
          <h1>Register</h1>
          <div className="input-box">
            <input
              className="registerInput"
              type="text"
              placeholder="Nombre de usuario"
            />
            <FaUser className="icono" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="email"
              required
            />
            <MdEmail className="icono" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="contraseña"
              required

            />
            <FaLock className="icono" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="confirmar Contraseña"
              required
            />
            <FaLock className="icono" />
          </div>

          <div className="input-box-file">
            <input
              className="input-file"
              type="file"
              id="fileInput"
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
            </p>
            <Link className="link" to="/login">aquí</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;