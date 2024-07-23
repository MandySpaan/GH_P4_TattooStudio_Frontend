import React, { useEffect, useState } from "react";
import "./About.css";
import { getServices } from "../../services/apiCalls";

export const About = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices();
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="about-page">
      <h1>We offer the following services</h1>
      {services.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="services-collection">
          {services.map((service) => (
            <div className="service-box" key={service.id}>
              <div className="service">{service.serviceName}</div>
              <div className="description">{service.description}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
