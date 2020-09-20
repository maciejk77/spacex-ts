import React, { useState } from 'react';
import useStyles from './styles';
import Modal from '../Modal/index';
import Photos from '../Photos/index';

type Props = {
  name: string;
  description: string;
  diameter: number;
  mass_kg: number;
  payload_mass: number;
  images: string[];
};

const Card: React.FC<Props> = ({
  name,
  description,
  diameter,
  mass_kg,
  payload_mass,
  images,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const defaultImage = images[0];
  const {
    containerStyle,
    headerStyle,
    imageStyle,
    buttonStyle,
    listStyle,
    listItemStyle,
    descriptionStyle,
  } = useStyles();

  return (
    <div className={containerStyle}>
      <img src={defaultImage} className={imageStyle} />
      <div className={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
        read more
      </div>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ul className={listStyle}>
            <li className={headerStyle}>Name: {name}</li>
            <li className={listItemStyle}>Diameter: {diameter}</li>
            <li className={listItemStyle}>Mass[kg]: {mass_kg}</li>
            <li className={listItemStyle}>Payload mass[kg]: {payload_mass}</li>
            <li className={descriptionStyle}>{description}</li>
            <Photos photos={images} />
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default Card;
