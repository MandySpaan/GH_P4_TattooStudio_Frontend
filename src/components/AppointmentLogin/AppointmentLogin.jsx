import React from "react";
import { NavLink } from "react-router-dom";
import "./AppointmentLogin.css";

const AppointmentLogin = () => {
  return (
    <div className="apptslogin-page">
      <p>
        You have to be logged in to be able to make an appointment. <br />
        Please <NavLink to="/login">login</NavLink> or{" "}
        <NavLink to="/register">create an account</NavLink>
      </p>
    </div>
  );
};

export default AppointmentLogin;
