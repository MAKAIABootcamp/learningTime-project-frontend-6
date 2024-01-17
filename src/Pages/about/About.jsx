import React from "react";
import Header from "../../components/Nav/Header";
import Donation from "../../components/donation/Donation";

import FooterClass from "../../components/FooterComponent/FooterClass";
import AboutUs from "../../components/aboutUs/AboutUs";
import ButtonPayment from "../../components/ButtonPayment/ButtonPayment";

function About() {
  return (
    <>
      <Header />
      <ButtonPayment />
      <AboutUs />
      <Donation />
      <FooterClass />
    </>
  );
}

export default About;
