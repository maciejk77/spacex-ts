import React, { useContext } from 'react';
import { Store } from '../../Store';
import Card from '../Card';

const Container = ({ activeTab }) => {
  const { store } = useContext(Store);

  const rocketsList = (
    <div>
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
    </div>
  );

  const dragonsList = (
    <div>
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
    </div>
  );

  return activeTab === 'Rockets' ? rocketsList : dragonsList;
};

export default Container;
