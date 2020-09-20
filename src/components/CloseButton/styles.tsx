import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    squareStyle: {
      width: 35,
      height: 35,
      backgroundColor: theme.themeColour3,
      border: `1px solid ${theme.themeColour2}`,
    },
    firstLineStyle: {
      height: 35,
      width: 5,
      marginLeft: 15,
      backgroundColor: theme.themeColour2,
      transform: 'rotate(45deg)',
      ZIndex: 1,
    },
    secondLineStyle: {
      height: 35,
      width: 5,
      backgroundColor: theme.themeColour2,
      transform: 'rotate(90deg)',
      ZIndex: 2,
    },
  }),
  { name: 'closeButton' }
);
