import { createUseStyles } from 'react-jss';

export default createUseStyles(
  (theme) => ({
    nonActive: {
      color: theme.themeColour1,
      backgroundColor: theme.baseColour,
    },
    active: {
      color: theme.baseColour,
      backgroundColor: theme.themeColour1,
    },
  }),
  { name: 'tabs' }
);
