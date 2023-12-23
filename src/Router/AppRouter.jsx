import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/home/Home";
import PublicRoutes from "./PublicRoutes";
import PrivatedRoutes from "./PrivatedRoutes";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRoutes isAuthenticate={false} />}>
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
          </Route>
          <Route element={<PrivatedRoutes isAuthenticate={false} />}>
            <Route path="Home" element={<Home />} />
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
