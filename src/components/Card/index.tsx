import React, { useState, Fragment } from 'react';

const Card = ({
  name,
  description,
  diameter,
  mass_kg,
  payload_mass,
  images,
}) => {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div style={styles.containerStyle}>
      <img src={images[0]} style={styles.cardStyle} />
      <div
        style={styles.buttonStyle}
        onClick={() => setIsExtended(!isExtended)}
      >
        {isExtended ? 'collapse' : 'read more'}
      </div>

      {isExtended && (
        <ul style={styles.listStyle}>
          <p style={styles.listItemStyle}>Name: {name}</p>
          <li style={styles.listItemStyle}>Diameter: {diameter}</li>
          <li style={styles.listItemStyle}>Mass[kg]: {mass_kg}</li>
          <li style={styles.listItemStyle}>Payload mass[kg]:{payload_mass}</li>
          <p style={{ fontSize: 15 }}>{description}</p>
        </ul>
      )}
    </div>
  );
};

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardStyle: {
    margin: '10px 0 0 10px',
    border: '5px solid white',
    width: 350,
    height: 350,
  },
  buttonStyle: {
    fontFamily: 'Andale Mono',
    position: 'absolute',
    padding: 7,
    backgroundColor: 'white',
    marginTop: 335,
    marginLeft: 255,
    width: 100,
    textAlign: 'center',
  },
  listStyle: {
    fontFamily: 'Andale Mono',
    marginTop: '-5px',
    backgroundColor: 'white',
    marginLeft: 10,
    width: 320,
    // border: '1px solid red',
  },
  listItemStyle: {
    listStyle: 'none',
  },
};

export default Card;

//  <div>
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//       <img src={images[0]} width="300" height="300" />
//       <button onClick={() => setIsExtended(!isExtended)}>
//         {isExtended ? 'Show less' : 'Show more'}
//       </button>
//     </div>

//   </div>
