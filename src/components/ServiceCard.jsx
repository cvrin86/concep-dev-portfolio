
import React from 'react';

import '../styles/ServicesPage.css';



const ServiceCard = ({ icon, title, description, features, className }) => {
  return (
    <div className={`card shadow-sm ${className}`}>
      <div className="text-center">
        <i className={`${icon} fs-1 text-success `}></i>
        <h5 className=" ">{title}</h5>
        {/* <p className="card-text">{description}</p> */}
        {/* <ul className="list-unstyled text-start mt-3">
          {features.map((feature, idx) => (
            <li key={idx} className="mb-1">• {feature}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default ServiceCard;




  