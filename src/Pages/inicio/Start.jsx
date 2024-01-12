import React from "react";
import { Link } from "react-router-dom";
import NavStart from "../../components/navStart/NavStart";
import InfoStart from "../../components/infoContainerStart/InfoStart";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";
import Pricing from "../../components/pricing/Pricing";

function Start() {
  return (
    <div>
      <NavStart />
      <InfoStart />
      <Feature />
      <Pricing />
      <Footer />
    </div>
  );
}

export default Start;
