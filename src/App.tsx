import React, { useState, useEffect, useContext, Fragment } from 'react';
import Tabs from './components/Tabs/index';
import Container from './components/Container';
import { Store } from './Store';
import { BASE_URL, tabs, ROCKETS, DRAGONS } from './consts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { store, dispatch } = useContext(Store);
  const isFetching = !(store.rockets.length && store.dragons.length);

  useEffect(() => {
    fetchDataFor(ROCKETS);
    fetchDataFor(DRAGONS);
  }, []);

  const fetchDataFor = async (entity: string) => {
    const URL = `${BASE_URL}/${entity.toLowerCase()}`;
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
      {isFetching ? <p>LOADING...</p> : <Container activeTab={activeTab} />}
    </>
  );
};

export default App;
