import React from 'react';

import useStyles from './styles';

type Props = {
  onClose: (boolean: any) => void;
};

const CloseButton: React.FC<Props> = ({ onClose }) => {
  const { squareStyle, firstLineStyle, secondLineStyle } = useStyles();
  return (
    <div className={squareStyle} onClick={() => onClose(false)}>
      <div className={firstLineStyle}>
        <div className={secondLineStyle}></div>
      </div>
    </div>
  );
};

export default CloseButton;
