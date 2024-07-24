import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section">
        <h4>Address</h4>
        <p>
          Carrer del Gobernador Vell 10
          <br />
          46003 VALENCIA
        </p>
      </div>
      <div className="section">
        <h4>Contact</h4>
        <p>
          info@tattooparadise.com <br />
          +34 555 555 555
        </p>
      </div>
      <div className="section">
        <h4>Opening Hours</h4>
        <p>
          Tuesday to Saturday
          <br />
          11:00–14:00 | 16:30–20:30
        </p>
      </div>
    </div>
  );
};

export default Footer;
