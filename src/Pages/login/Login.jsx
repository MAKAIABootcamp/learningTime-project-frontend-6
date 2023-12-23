import React from "react";
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="body">
      <div className="wrapper">
        <form className="form">
          <h1>Login</h1>
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

          <div className="remembre-forgot">
            <label htmlFor="">
              <input type="checkbox" />
              recuérdame
            </label>

          </div>
          <div className="button">
            <button type="submit">Login</button>
          </div>
          <br />
          <div className="button">
            <button type="submit">
              Entrar con google
            </button>
          </div>

          <div className="Register-link">
            <p>
              No tienes una cuenta registrate? 
            </p>
            <Link className="link" to="/Register">aquí</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;