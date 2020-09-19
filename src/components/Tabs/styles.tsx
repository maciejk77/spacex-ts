import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    nonActive: {
      color: 'gray',
      backgroundColor: 'white',
    },
    active: {
      color: 'white',
      backgroundColor: 'gray',
    },
  },
  { name: 'tabs' }
);
