import React from 'react';
import "./ServicesCard.css"

const ServicesCard = ({
    name,
    icon,
    description
}) => {
  return (
    <div className='service__card'>
      <div className="icon__container">
        {icon}
      </div>
      <h3 className="name">{name}</h3>
      <p className="text__muted description">{description}</p>
      
    </div>
  );
};

export default ServicesCard;