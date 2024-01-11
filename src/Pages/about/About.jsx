import React from "react";
import Header from "../../components/Nav/Header";
import Donation from "../../components/donation/Donation";

import FooterClass from "../../components/FooterComponent/FooterClass";
import AboutUs from "../../components/aboutUs/AboutUs";

function About() {
  return (
    <>
      <Header />
      <AboutUs />

      <Donation />
      <FooterClass />
    </>
  );
}

export default About;
