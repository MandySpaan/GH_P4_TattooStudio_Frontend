import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    console.log("HandleChange");
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <p>
          Login or <NavLink to="/register">register</NavLink> if you don't have
          an account yet
        </p>

        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <input type="button" value="Register" />
      </div>
    </>
  );
};
