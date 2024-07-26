import React, { useEffect, useState } from "react";

const BookAppointment = () => {
  const [newAppointment, setNewAppointment] = useState({
    serviceIs: "",
    date: "",
  });

  const todayString = new Date().toISOString().split("T")[0];

  const inputHandler = (e) => {
    setNewAppointment({
      ...newAppointment,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="date"
        min={todayString}
        value={newAppointment.date}
        name="date"
        onChange={(e) => inputHandler(e)}
      />

      <select onChange={(e) => inputHandler(e)}>
        <option disable selected hidden>
          Please Choose...
        </option>
        <option value={1}>Personalized Tattoo</option>
        <option value={2}>Catalogue Tattoo</option>
        <option value={3}>Restoration and Rejuvenation</option>
        <option value={4}>Placement of piercings</option>
        <option value={5}>The shop</option>
      </select>
    </div>
  );
};

export default BookAppointment;
