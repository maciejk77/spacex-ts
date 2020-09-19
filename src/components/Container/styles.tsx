import { createUseStyles } from 'react-jss';
const minWidth = 768;

export default createUseStyles(
  {
    container: {
      border: '1px solid gray',
      marginTop: '-1px',
      backgroundColor: 'gray',
      paddingBottom: 10,
      width: 380,
      display: 'flex',
      flexWrap: 'wrap',
    },
    [`@media (min-width: ${minWidth}px)`]: {
      container: {
        width: 750,
      },
    },
  },
  { name: 'container' }
);
