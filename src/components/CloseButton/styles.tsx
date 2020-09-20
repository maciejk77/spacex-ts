import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    squareStyle: {
      width: 35,
      height: 35,
      backgroundColor: 'lightsalmon',
      border: '1px solid black',
    },
    firstLineStyle: {
      height: 35,
      width: 5,
      marginLeft: 15,
      backgroundColor: 'black',
      transform: 'rotate(45deg)',
      ZIndex: 1,
    },
    secondLineStyle: {
      height: 35,
      width: 5,
      backgroundColor: 'black',
      transform: 'rotate(90deg)',
      ZIndex: 2,
    },
  },
  { name: 'closeButton' }
);
