import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/apiCalls";
import "./Register.css";

export const Register = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function register() {
    try {
      console.log(credentials);

      const response = await registerUser(credentials);

      if (response.success) {
        navigate("/login");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Register</h1>
        <h2>
          Create an account or <NavLink to="/login">login</NavLink>
        </h2>

        <input
          type="text"
          name="email"
          id=""
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="button" value="Register" onClick={register} />
      </div>
    </div>
  );
};
