import React from 'react';
import useStyles from './styles';

interface Props {
  label: string;
  activeTab: number;
  onClick: () => void;
}

const Tab: React.FC<Props> = ({ label, onClick }) => {
  const { container } = useStyles();
  return (
    <div className={container} onClick={onClick}>
      {label}
    </div>
  );
};

export default Tab;
