import React, { useEffect, useState } from "react";

export const About = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/services");
        const fetchedData = await response.json();
        setServices(fetchedData.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      {services.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              {service.serviceName} <br />
              {service.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
