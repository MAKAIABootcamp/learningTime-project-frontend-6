import React from "react";
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginGoogle,
  loginWithEmailAndPassword,
} from "../../store/users/userActions";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect } from "react";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticate, user, error } = useSelector((store) => store.user);
  const { register, handleSubmit } = useForm();

  const handleLogin = () => {
    dispatch(loginGoogle());
  };

  const handleLoginWithEmailAndPassword = (data) => {
    console.table(data);
    dispatch(loginWithEmailAndPassword(data));
  };

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Oops!",
        text: "Ha ocurrido un error, por favor verifique sus credenciales",
        icon: "Error",
      });
    }

    if (error === false) {
      Swal.fire({
        title: `Bienvenido ${user.name}!`,
        text: "Has iniciado sesión exitosamente",
        icon: "success",
      }).then(navigate("/home"));
    }
  }, [error]);

  return (
    <div className="body">
      <div className="wrapper">
        <form onSubmit={handleSubmit(handleLoginWithEmailAndPassword)} className="form">
          <h1>Login</h1>
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
            <button type="submit" onClick={() => handleLogin()}>
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