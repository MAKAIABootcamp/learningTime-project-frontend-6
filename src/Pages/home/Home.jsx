import React from "react";
import Header from "../../components/Nav/Header";
import Hero from "../../components/hero/Hero";
import Pricing from "../../components/pricing/Pricing";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Pricing />
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;
