import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../services/apiCalls";
import "./UserProfile.css";

export const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [editing, setEditing] = useState(false);

  const passport = JSON.parse(localStorage.getItem("passport"));

  const navigate = useNavigate();

  useEffect(() => {
    if (!passport) {
      navigate("/login");
    } else {
      const bringMyProfile = async () => {
        const response = await getProfile(passport.token);
        setProfileData(response.data);
        console.log(response);
      };
      bringMyProfile();
    }
  }, []);

  const editButtonHandler = () => {
    setEditing(!editing);
  };

  useEffect(() => {}, [editing]);

  return (
    <div className="userprofile-box">
      <h2>Profile</h2>
      <div className="profile-info">
        <p>First name: {profileData.firstName} </p>
        <p>Last name: {profileData.lastName} </p>
        <p>Email: {profileData.email} </p>
      </div>
      <div className="profile-buttons">
        <input
          type="button"
          name="edit"
          value={!editing ? "Edit" : "Cancel"}
          onClick={editButtonHandler}
        />
        <input
          type="button"
          name="save"
          value="Save changes"
          className={!editing ? "hidden" : ""}
        />
      </div>
    </div>
  );
};
