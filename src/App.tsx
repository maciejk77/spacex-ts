import React, { useState, useEffect, useContext, Fragment } from 'react';
import Tabs from './components/Tabs/index';
import Container from './components/Container';
import { Store } from './Store';

const App: React.FC = () => {
  const tabs = ['Rockets', 'Dragons'];
  const [ROCKETS, DRAGONS] = tabs;
  const [activeTab, setActiveTab] = useState(0);
  const { store, dispatch } = useContext(Store);
  const fetchingCompleted = store.rockets.length && store.dragons.length;

  useEffect(() => {
    fetchDataFor(ROCKETS);
    fetchDataFor(DRAGONS);
  }, []);

  const fetchDataFor = async (entity: string) => {
    const URL = `https://api.spacexdata.com/v3/${entity.toLowerCase()}`;
    const data = await fetch(URL);
    const dataJSON = await data.json();

    return dispatch({
      type: `FETCH_${entity.toUpperCase()}`,
      payload: dataJSON,
    });
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {fetchingCompleted ? (
        <Container activeTab={tabs[activeTab]} />
      ) : (
        <p>LOADING...</p>
      )}
    </>
  );
};

export default App;
