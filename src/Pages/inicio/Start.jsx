import React from "react";
import { Link } from "react-router-dom";
import NavStart from "../../components/navStart/NavStart";
import InfoStart from "../../components/infoContainerStart/InfoStart";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";

function Start() {
  return (
    <div>
      <NavStart />
      <InfoStart />
      <Feature />
      <Footer />
    </div>
  );
}

export default Start;
