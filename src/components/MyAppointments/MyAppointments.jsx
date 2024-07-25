import React, { useEffect, useState } from "react";
import {
  deleteAppointmentById,
  getMyAppointments,
} from "../../services/apiCalls";
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

  const deleteApptHandler = async (e) => {
    const id = +e.target.name;
    const response = await deleteAppointmentById(passport.token, id);
    const remainingAppts = myAppointments.filter((appt) => {
      if (appt.id !== id) {
        return appt;
      }
    });
    setMyAppointments(remainingAppts);
  };

  return (
    <div className="myappointment-box">
      <h2>My Appointments</h2>
      {myAppointments.map((appointment) => (
        <div className="appointments-info" key={appointment.id}>
          <div className="date">{formatDate(appointment.appointmentDate)}</div>
          <div className="service">{appointment.service.serviceName}</div>
          <div className="cancel">
            <input
              type="button"
              value="delete"
              name={appointment.id}
              onClick={deleteApptHandler}
            />{" "}
          </div>
        </div>
      ))}
    </div>
  );
};
