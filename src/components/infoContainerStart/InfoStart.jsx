import React from "react";
import "./InfoStart.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function InfoStart() {
  const { t } = useTranslation();

  return (
    <>
      <div className="contStart">
        <div className="contText">
          <div className="text">
            <p>
              {t("learnFrom")} <p className="p-curso">{t("anywhere")}</p>
            </p>
          </div>
          <div className="contDescription">
            <p className="description">{t("fromSofa")}</p>
          </div>

          <Link to="/Login">
            <button className="buttonText">{t("login")}</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default InfoStart;
