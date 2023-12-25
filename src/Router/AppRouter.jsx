import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/home/Home";
import PublicRoutes from "./PublicRoutes";
import PrivatedRoutes from "./PrivatedRoutes";
import Cursos from "../Pages/cursos/Cursos";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRoutes isAuthenticate={true} />}>
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
          </Route>
          <Route element={<PrivatedRoutes isAuthenticate={true} />}>
            <Route path="Home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="Cursos" element={<Cursos />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;