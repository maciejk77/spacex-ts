import React from 'react';
import { createPortal } from 'react-dom';
import useStyles from './styles';
import CloseButton from '../CloseButton/index';

const Modal = ({ children, onClose }) => {
  const { overlayStyle, modalStyle, modalContainerStyle } = useStyles();
  const modal = (
    <div className={overlayStyle}>
      <div className={modalStyle}>
        <div className={modalContainerStyle}>
          {children}
          <CloseButton onClose={onClose} />
        </div>
      </div>
    </div>
  );

  const node = document.getElementById('modal');

  return createPortal(modal, node);
};

export default Modal;