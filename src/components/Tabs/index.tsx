import React from 'react';
import Tab from '../Tab/index';

interface Props {
  tabs: string[];
  activeTab: number;
  setActiveTab: (activeTab: number) => number;
}

const Tabs: Function = ({
  tabs,
  activeTab,
  setActiveTab,
}: Props): JSX.Element[] =>
  tabs.map((tab, index) => {
    const tabStyle =
      activeTab === index ? styles.activeTabStyle : styles.nonActiveTabStyle;

    return (
      <div key={index} style={tabStyle}>
        <Tab label={tab} onClick={() => setActiveTab(index)} />
      </div>
    );
  });

const styles = {
  nonActiveTabStyle: {
    color: 'gray',
    backgroundColor: 'white',
  },
  activeTabStyle: {
    color: 'white',
    backgroundColor: 'gray',
  },
};

export default Tabs;
