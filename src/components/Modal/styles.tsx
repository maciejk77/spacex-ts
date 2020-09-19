import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    overlayStyle: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray',
      opacity: 0.9,
      height: 1600,
    },
    modalStyle: {
      top: 90,
      padding: 20,
      background: 'gray',
      borderRadius: '2px',
      display: 'inline-block',
      margin: '1rem',
      position: 'absolute',
      minWidth: 600,
      minHeight: 600,
      boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      justifySelf: 'center',
    },
    modalContainerStyle: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  { name: 'modal' }
);
