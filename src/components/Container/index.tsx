import React, { useContext } from 'react';
import { Store } from '../../Store';
import Card from '../Card';
import useStyles from './styles';
import { IState } from '../../interfaces/index';
import { tabs, ROCKETS } from '../../consts';

type Props = {
  activeTab: number;
};

const Container: React.FC<Props> = ({ activeTab }) => {
  const { store } = useContext(Store);
  const { container } = useStyles();

  const rocketsList = (
    <>
      {store.rockets[0].map((rocket: IState) => {
        return (
          <Card
            key={rocket.id}
            name={rocket.rocket_name}
            description={rocket.description}
            diameter={rocket.diameter.meters}
            mass_kg={rocket.mass.kg}
            payload_mass={rocket.payload_weights[0].kg}
            images={rocket.flickr_images}
          />
        );
      })}
    </>
  );

  const dragonsList = (
    <>
      {store.dragons[0].map((dragon: IState) => {
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
    <div className={container}>
      {tabs[activeTab] === ROCKETS ? rocketsList : dragonsList}
    </div>
  );
};

export default Container;
