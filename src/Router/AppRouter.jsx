import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/home/Home";
import PublicRoutes from "./PublicRoutes";
import PrivatedRoutes from "./PrivatedRoutes";
import { useSelector } from "react-redux";
import Cursos from "../Pages/cursos/Cursos";
import Class from "../Pages/classs/Class";
import About from "../Pages/about/About";
import Contact from "../Pages/contact/contact";

function AppRouter() {
  const { isAuthenticate } = useSelector((store) => store.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRoutes isAuthenticate={isAuthenticate} />}>
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
          </Route>
          <Route element={<PrivatedRoutes isAuthenticate={isAuthenticate} />}>
            <Route path="Home" element={<Home />} />
            <Route path="Cursos" element={<Cursos />} />
            <Route path="Class" element={<Class />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
