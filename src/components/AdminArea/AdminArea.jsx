import React from "react";
import "./AdminArea.css";
import { NavLink } from "react-router-dom";

const AdminArea = () => {
  return (
    <div className="admin-box">
      <h2>AdminArea</h2>
      <NavLink to="/users">Go to all users</NavLink>
    </div>
  );
};

export default AdminArea;
