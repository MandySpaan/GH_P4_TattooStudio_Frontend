import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Appointments } from "../pages/Appointments/Appointments";
import { Register } from "../pages/Register/Register";
import { About } from "../pages/About/About";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
