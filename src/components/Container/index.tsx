import React, { useContext, Fragment } from 'react';
import { Store } from '../../Store';
import Card from '../Card';

const Container = ({ activeTab }) => {
  const { store } = useContext(Store);

  const rocketsList = (
    <>
      {store.rockets[0].map((rocket) => {
        return (
          <Card
            key={rocket.id}
            name={rocket.rocket_name}
            description={rocket.description}
            diameter={rocket.diameter.meters}
            mass_kg={rocket.mass.kg}
            payload_mass={rocket.payload_weights[0].kg} // quick fix
            images={rocket.flickr_images}
          />
        );
      })}
    </>
  );

  const dragonsList = (
    <>
      {store.dragons[0].map((dragon) => {
        return (
          <Card
            key={dragon.id}
            name={dragon.name}
            description={dragon.description}
            diameter={dragon.diameter.meters}
            mass_kg={dragon.dry_mass_kg}
            payload_mass={dragon.launch_payload_mass.kg}
            images={dragon.flickr_images}
          />
        );
      })}
    </>
  );

  return (
    <div
      style={{
        border: '1px solid gray',
        marginTop: '-1px',
        backgroundColor: 'gray',
        paddingBottom: 10,

        maxWidth: 750,
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {activeTab === 'Rockets' ? rocketsList : dragonsList}
    </div>
  );
};

export default Container;
