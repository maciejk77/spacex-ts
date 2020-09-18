import React from 'react';

const Card = ({
  name,
  description,
  diameter,
  mass_kg,
  payload_mass,
  images,
}) => {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Diameter: {diameter}</div>
      <div>Mass[kg]: {mass_kg}</div>
      <div>Payload mass[kg]:{payload_mass}</div>
      <img src={images[0]} width="200" height="200" />
      <div>{description}</div>
      <div>==============================</div>
    </div>
  );
};

export default Card;
