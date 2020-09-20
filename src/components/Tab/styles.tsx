import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    container: {
      fontFamily: theme.baseFonts,
      fontSize: '18px',
      border: `1px solid ${theme.themeColour1}`,
      padding: 10,
      width: 150,
      textAlign: 'center',
    },
  }),
  { name: 'tab' }
);
