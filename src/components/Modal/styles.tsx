import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    overlayStyle: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.themeColour0,
      opacity: 0.95,
      height: 1600,
    },
    modalStyle: {
      top: 50,
      padding: 20,
      background: theme.themeColour1,
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
  }),
  { name: 'modal' }
);
