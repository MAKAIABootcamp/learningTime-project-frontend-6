import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaImage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import uploadFile from "../../services/fileUpload";
import { createAnAccountAsync } from "../../store/users/userActions";
import { useTranslation } from "react-i18next";

function Register() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const handleRegister = async (data) => {
    const photoURL = await uploadFile(data.image[0]);
    console.log(photoURL);
    const newUser = {
      ...data,
      photoURL,
      name: data.name,
      email: data.email,
      password: data.password,
    };
    dispatch(createAnAccountAsync(newUser));
  };

  return (
    <div className="body">
      <div className="wrapper">
        <form onSubmit={handleSubmit(handleRegister)}>
          <h1>{t("register")}</h1> {/* Agrega la traducción aquí */}
          <div className="input-box">
            <input
              className="registerInput"
              type="text"
              placeholder={t("username")}
              {...register("name")}
            />
            <FaUser className="icono" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder={t("email")}
              required
              {...register("email")}
            />
            <MdEmail className="icono" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder={t("password")}
              required
              {...register("password")}
            />
            <FaLock className="icono" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder={t("confirmPassword")}
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
              <span>{t("selectImage")}</span>
              <FaImage className="icono" />
            </label>
          </div>
          <div className="button">
            <button type="submit">{t("createAccount")}</button>
          </div>
          <div className="Register-link">
            <p>
              {t("alreadyHaveAccount")}{" "}
              <Link to="/login">{t("loginHere")}</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
