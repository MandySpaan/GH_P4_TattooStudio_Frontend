import React from "react";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { MyAppointments } from "../../components/MyAppointments/MyAppointments";

export const Profile = () => {
  return (
    <>
      <UserProfile />
      <MyAppointments />
    </>
  );
};
