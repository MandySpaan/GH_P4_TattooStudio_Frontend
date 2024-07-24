import React from "react";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { MyAppointments } from "../../components/MyAppointments/MyAppointments";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile-page">
      <div>
        <UserProfile />
      </div>
      <div>
        <MyAppointments />
      </div>
    </div>
  );
};
