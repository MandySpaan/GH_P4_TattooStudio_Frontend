import React, { useEffect, useState } from "react";
import { getMyAppointments } from "../../services/apiCalls";

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
  }, []);
  return (
    <div>
      <h2>My Appointments</h2>
      {myAppointments.map((appointment) => (
        <div key={appointment.id}>
          <div>{appointment.appointmentDate}</div>
          <div>{appointment.service.serviceName}</div>
        </div>
      ))}
    </div>
  );
};
