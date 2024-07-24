import React from "react";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { MyAppointments } from "../../components/MyAppointments/MyAppointments";
import "./Profile.css";
import AdminArea from "../../components/AdminArea/AdminArea";

export const Profile = () => {
  const passport = JSON.parse(localStorage.getItem("passport")) || {};

  const role = passport.tokenData ? passport.tokenData.role : null;

  return (
    <div div className="profile-page">
      <div className={role === 1 ? "" : "hidden"}>
        <AdminArea />
      </div>
      <div>
        <UserProfile />
      </div>
      <div>
        <MyAppointments />
      </div>
    </div>
  );
};
