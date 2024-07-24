import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/apiCalls";
import { jwtDecode } from "jwt-decode";
import "./Login.css";
import { isTokenValid } from "../../utils/functions";

export const Login = () => {
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

  async function login() {
    try {
      const response = await loginUser(credentials);

      if (response.success) {
        const decodedToken = jwtDecode(response.token);
        const passport = {
          token: response.token,
          tokenData: decodedToken,
        };
        localStorage.setItem("passport", JSON.stringify(passport));
        isTokenValid(decodedToken.exp);
        navigate("/profile");
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <h1>Login</h1>
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
          <input type="button" value="Login" onClick={login} />
          <p>Don't have an account yet?</p>
          <NavLink id="link" to="/register">
            Register here
          </NavLink>
        </div>
      </div>
    </>
  );
};
