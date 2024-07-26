import React, { useEffect, useState } from "react";
import { createAppointment } from "../../services/apiCalls";
import "./BookAppointment.css";

const BookAppointment = () => {
  const [newAppointment, setNewAppointment] = useState({
    appointmentDate: "",
    serviceId: "",
  });

  const todayString = new Date().toISOString().split("T")[0];

  const passport = JSON.parse(localStorage.getItem("passport"));

  const inputHandler = (e) => {
    console.log(e.target.name);
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendAppointment = async () => {
    try {
      const response = await createAppointment(newAppointment, passport.token);
      if (response.success) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bookappointment-page">
      <div className="bookappointment-box">
        <div className="date">
          <input
            type="date"
            min={todayString}
            value={newAppointment.appointmentDate}
            name="appointmentDate"
            onChange={(e) => inputHandler(e)}
          />
        </div>
        <select name="serviceId" onChange={(e) => inputHandler(e)}>
          <option disable selected hidden>
            Please Choose...
          </option>
          <option value={1}>Personalized Tattoo</option>
          <option value={2}>Catalogue Tattoo</option>
          <option value={3}>Restoration and Rejuvenation</option>
          <option value={4}>Placement of piercings</option>
          <option value={5}>The shop</option>
        </select>
        <button onClick={handleSendAppointment}>Book Appointment</button>
      </div>
    </div>
  );
};

export default BookAppointment;
