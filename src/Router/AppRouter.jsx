import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/home/Home";
import PublicRoutes from "./PublicRoutes";
import PrivatedRoutes from "./PrivatedRoutes";
import { useDispatch, useSelector } from "react-redux";
import Cursos from "../Pages/cursos/Cursos";
import Class from "../Pages/classs/Class";
import About from "../Pages/about/About";
import Contact from "../Pages/contact/contact";
import { setIsAuthenticate, setUser } from "../store/users/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import Admin from "../Pages/admin/Admin";
import Start from "../Pages/inicio/Start";

function AppRouter() {
  const { isAuthenticate, user } = useSelector((store) => store.user);
  const [checking, setChecking] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userLogger) => {
      if (userLogger?.uid && !user) {
        dispatch(setIsAuthenticate(true));
        dispatch(
          setUser({
            email: userLogger.email,
            id: userLogger.uid,
            name: userLogger.displayName,
            photoURL: userLogger.photoURL,
            accessToken: userLogger.accessToken,
          })
        );
      }
    });
    setChecking(false);
  }, [dispatch, user]);
  if (checking) {
    return <div>Cargando...</div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<PublicRoutes isAuthenticate={isAuthenticate} />}>
            <Route path="Start" element={<Start />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
          </Route>
          <Route element={<PrivatedRoutes isAuthenticate={isAuthenticate} />}>
            <Route path="Home" element={<Home />} />
            <Route path="Cursos" element={<Cursos />} />
            <Route path="Class" element={<Class />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Admin" element={<Admin />} />

            <Route index element={<Home />} />
            {}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
