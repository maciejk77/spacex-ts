import React from 'react';
import Tab from '../Tab/index';
import useStyles from './styles';

interface Props {
  tabs: string[];
  activeTab: number;
  setActiveTab: (activeTab: number) => number;
}

const Tabs: React.FC<Props> = ({ tabs, activeTab, setActiveTab }) =>
  tabs.map((tab, index) => {
    const { active, nonActive } = useStyles();
    const tabStyle = activeTab === index ? active : nonActive;

    return (
      <div key={index} className={tabStyle}>
        <Tab label={tab} onClick={() => setActiveTab(index)} />
      </div>
    );
  });

export default Tabs;
