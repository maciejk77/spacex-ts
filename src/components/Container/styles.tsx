import { createUseStyles } from 'react-jss';
const minWidth = 768;

export default createUseStyles(
  (theme) => ({
    container: {
      border: `1px solid ${theme.themeColour1}`,
      marginTop: '-1px',
      backgroundColor: theme.themeColour1,
      paddingBottom: 10,
      width: 380,
      display: 'flex',
      flexWrap: 'wrap',
    },
    [`@media (min-width: ${minWidth}px)`]: {
      container: {
        width: theme.breakpoint1,
      },
    },
  }),
  { name: 'container' }
);
