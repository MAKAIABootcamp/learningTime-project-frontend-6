import React from "react";
import Header from "../../components/Nav/Header";
import Hero from "../../components/hero/Hero";
import Pricing from "../../components/pricing/Pricing";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Home = () => {
  const { isAuthenticate, user } = useSelector((store) => store.user);

  return (
    <div>
      <Header />

      {isAuthenticate && user && user.email === "jesusA@gmail.com" && (
        <Button>Botón para jesusA@gmail.com</Button>
      )}

      <div>
        {isAuthenticate && user && user.email === "jesusA@gmail.com" && (
          <span>¡Bienvenido administrador {user.displayName}!</span>
        )}
      </div>

      <Hero />
      <Pricing />
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;
