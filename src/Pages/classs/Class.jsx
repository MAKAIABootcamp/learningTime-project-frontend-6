import React from "react";
import Header from "../../components/Nav/Header";
import InformationClass from "../../components/InformationClass/InformationClass";
import Accordion from "../../components/accordion/Accordion";

import DetailsClass from "../../components/detailsClass/DetailsClass";
import FooterClass from "../../components/FooterComponent/FooterClass";

function Class() {
  return (
    <>
      <Header />
      <InformationClass />
      <Accordion />
      <DetailsClass />
      <FooterClass />
    </>
  );
}

export default Class;
