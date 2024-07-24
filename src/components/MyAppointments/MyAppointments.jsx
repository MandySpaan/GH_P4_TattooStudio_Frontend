import React, { useEffect, useState } from "react";
import { getMyAppointments } from "../../services/apiCalls";
import "./MyAppointments.css";

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const MyAppointments = () => {
  const [myAppointments, setMyAppointments] = useState([]);

  const passport = JSON.parse(localStorage.getItem("passport"));

  useEffect(() => {
    const bringMyAppointments = async () => {
      const response = await getMyAppointments(passport.token);
      setMyAppointments(response.data);
      console.log(response);
    };
    bringMyAppointments();
  }, [passport.token]);

  return (
    <div className="myappointment-box">
      <h2>My Appointments</h2>
      {myAppointments.map((appointment) => (
        <div key={appointment.id}>
          <div>{formatDate(appointment.appointmentDate)}</div>
          <div>{appointment.service.serviceName}</div>
        </div>
      ))}
    </div>
  );
};
