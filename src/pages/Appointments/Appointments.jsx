import React from "react";
import BookAppointment from "../../components/BookAppointment/BookAppointment";
import { MyAppointments } from "../../components/MyAppointments/MyAppointments";
import AppointmentLogin from "../../components/AppointmentLogin/AppointmentLogin";
import "./Appointments.css";

export const Appointments = () => {
  const passport = JSON.parse(localStorage.getItem("passport"));
  const isLoggedIn = passport && passport.token;

  return (
    <div>
      {isLoggedIn ? (
        <>
          <BookAppointment />
          <MyAppointments />
        </>
      ) : (
        <AppointmentLogin />
      )}
    </div>
  );
};
