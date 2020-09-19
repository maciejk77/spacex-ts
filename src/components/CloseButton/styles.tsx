import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    squareStyle: {
      width: 35,
      height: 35,
      backgroundColor: 'black',
      border: '1px solid white',
    },
    firstLineStyle: {
      height: 35,
      width: 5,
      marginLeft: 15,
      backgroundColor: 'white',
      transform: 'rotate(45deg)',
      ZIndex: 1,
    },
    secondLineStyle: {
      height: 35,
      width: 5,
      backgroundColor: 'white',
      transform: 'rotate(90deg)',
      ZIndex: 2,
    },
  },
  { name: 'closeButton' }
);
