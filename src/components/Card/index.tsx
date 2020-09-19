import React, { useState } from 'react';
import useStyles from './styles';

const Card = ({
  name,
  description,
  diameter,
  mass_kg,
  payload_mass,
  images,
}) => {
  const [isExtended, setIsExtended] = useState(false);
  const {
    container,
    header,
    image,
    button,
    list,
    listItem,
    text,
  } = useStyles();

  return (
    <div className={container}>
      <img src={images[0]} className={image} />
      <div className={button} onClick={() => setIsExtended(!isExtended)}>
        {isExtended ? 'collapse' : 'read more'}
      </div>

      {isExtended && (
        <ul className={list}>
          <li className={header}>Name: {name}</li>
          <li className={listItem}>Diameter: {diameter}</li>
          <li className={listItem}>Mass[kg]: {mass_kg}</li>
          <li className={listItem}>Payload mass[kg]: {payload_mass}</li>
          <li className={text}>{description}</li>
        </ul>
      )}
    </div>
  );
};

export default Card;
