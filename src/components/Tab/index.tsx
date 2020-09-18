import React from 'react';

interface Props {
  label: string;
  activeTab?: number;
  onClick?: () => void;
}

const Tab: React.FC<Props> = ({ label, onClick }) => (
  <div style={styles.labelStyle} onClick={onClick}>
    {label}
  </div>
);

export default Tab;

const styles = {
  labelStyle: {
    fontFamily: 'Arial',
    fontSize: '18px',
    border: '1px solid gray',
    padding: 10,
    width: 150,
    textAlign: 'center' as 'center',
  },
};
